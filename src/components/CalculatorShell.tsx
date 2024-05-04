"use client";
import { useEffect, useState } from "react"; // Import useState hook
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { CircleXIcon, HistoryIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { create, all } from "mathjs";

type Operation = {
  eq: string;
  res: string;
};

const CalculatorShell = () => {
  const [inputValue, setInputValue] = useState(""); // Create state for input value
  const [operations, setOperations] = useState<Operation[]>([]); // Create state for operations

  useEffect(() => {
    const operations = JSON.parse(localStorage.getItem("operations") || "[]");
    setOperations(operations);
  }, []);

  const handleButtonClick = (value: string) => {
    setInputValue((prevValue) => prevValue + value); // Update input value when a button is clicked
  };

  const handleClear = () => {
    setInputValue(""); // Clear the input value
  };

  const handleClearEntry = () => {
    setInputValue((prevValue) => prevValue.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      if (inputValue === "") {
        return;
      }

      const math = create(all);
      let result;
      try {
        if (inputValue.includes("Error")) {
          handleClear();
          return;
        }
        if (inputValue.split("(").length !== inputValue.split(")").length) {
          toast.error("Missing Closing Parenthesis", {
            duration: 3000,
            icon: <CircleXIcon className='size-5 text-destructive' />
          });
          return;
        }

        result = math.evaluate(inputValue);
        if (result === Infinity) {
          toast.error("Cannot divide by zero", {
            duration: 3000,
            icon: <CircleXIcon className='size-5 text-destructive' />
          });
          return;
        }
        if (result.toString().includes(".")) {
          result = result.toFixed(10);
        }
        setInputValue(result.toString());
      } catch (error) {
        const err = error as Error;
        toast.error(err.name, {
          icon: <CircleXIcon className='size-5 text-destructive' />,
          duration: 3000,
          dismissible: true,
          important: true,
          description: err.message
        });
      }

      // Add the operation and its solution to localStorage
      const operation: Operation = {
        eq: inputValue,
        res: result.toString()
      };
      setOperations((prevOperations) => [...prevOperations, operation]);
      localStorage.setItem(
        "operations",
        JSON.stringify([...operations, operation])
      );
    } catch (error) {
      const err = error as Error;
      toast.error(err.name, {
        icon: <CircleXIcon className='size-5 text-destructive' />,
        duration: 3000,
        dismissible: true,
        important: true,
        description: err.message
      });
    }
  };

  return (
    <>
      <Dialog>
        <Card className='m-4 w-72'>
          <CardContent className='p-4 flex flex-col gap-4'>
            <Input
              type='text'
              placeholder='0'
              className='text-3xl text-right p-6 font-bold'
              readOnly
              value={inputValue} // Bind input value to the state
            />
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-destructive text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive'
                  onClick={handleClear} // Add onClick event handler for clear button
                >
                  C
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-destructive text-destructive-foreground hover:bg-destructive-foreground hover:text-destructive'
                  onClick={handleClearEntry} // Add onClick event handler for clear entry button
                >
                  DEL
                </Button>
                <DialogTrigger asChild>
                  <Button className='flex-auto size-10 font-bold p-6 bg-success text-success-foreground hover:bg-success-foreground hover:text-success'>
                    <HistoryIcon />
                  </Button>
                </DialogTrigger>
              </div>
              <div className='flex gap-4'>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("(")}
                >
                  (
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick(")")}
                >
                  )
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("^")}
                >
                  ^
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("sqrt(")}
                >
                  √
                </Button>
              </div>
              <div className='flex gap-4'>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("7")} // Add onClick event handler for each button
                >
                  7
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("8")}
                >
                  8
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("9")}
                >
                  9
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("*")}
                >
                  *
                </Button>
              </div>
              <div className='flex gap-4'>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("4")}
                >
                  4
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("5")}
                >
                  5
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("6")}
                >
                  6
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("/")}
                >
                  /
                </Button>
              </div>
              <div className='flex gap-4'>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("1")}
                >
                  1
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("2")}
                >
                  2
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("3")}
                >
                  3
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("-")}
                >
                  -
                </Button>
              </div>
              <div className='flex gap-4'>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick("0")}
                >
                  0
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6'
                  onClick={() => handleButtonClick(".")}
                >
                  .
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={handleCalculate} // Add onClick event handler for calculate button
                >
                  =
                </Button>
                <Button
                  className='flex-auto size-10 font-bold p-6 bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent'
                  onClick={() => handleButtonClick("+")}
                >
                  +
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <DialogContent>
          <h2 className='text-3xl font-bold'>History:</h2>
          <div className='flex flex-col gap-2 text-center w-full'>
            {operations.length ? (
              <>
                <div className='flex items-center justify-between'>
                  <span className='flex-1 flex justify-start w-full font-bold text-2xl'>
                    Entry:
                  </span>
                  <span className='flex-1 flex justify-center w-full font-bold text-2xl'>
                    Result:
                  </span>
                  <span className='flex-1 flex justify-end text-right w-full font-bold text-2xl'>
                    Delete:
                  </span>
                </div>
                {operations.map((operation, index) => (
                  <div
                    key={index}
                    className='flex items-center justify-between'
                  >
                    <span className='flex-1 font-bold flex justify-start w-full'>
                      {operation.eq}
                    </span>
                    <span className='flex-1 italic flex text-center justify-center w-full'>
                      {operation.res}
                    </span>
                    <span
                      className='flex-1 flex justify-end text-right w-full cursor-pointer'
                      onClick={() => {
                        const newOperations = operations.filter(
                          (_, i) => i !== index
                        );
                        setOperations(newOperations);
                        localStorage.setItem(
                          "operations",
                          JSON.stringify(newOperations)
                        );
                      }}
                    >
                      <Trash2Icon className='size-5 text-destructive' />
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                <p className='font-bold text-lg'>No history yet!</p>
                <p className='italic text-sm'>
                  Perform some calculations to see history
                </p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CalculatorShell;
