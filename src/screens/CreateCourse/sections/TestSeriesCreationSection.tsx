import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../../../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const quizTypes = [
  {
    id: "online",
    title: "Online quiz",
    description: "Create online quiz by using competitive exam template",
  },
  {
    id: "offline",
    title: "Offline quiz",
    description:
      "Create offline quiz using essay type questions & digitally evaluate the answers",
  },
];

export const TestSeriesCreationSection = (): JSX.Element => {
  const [quizType, setQuizType] = useState("online");

  return (
    <section className="w-full px-4 py-6 md:px-6 md:py-8">
      <Card className="w-full rounded-[10px] border-[0.5px] border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-4 md:p-6">
          <header className="mb-8 flex flex-col gap-1">
            <h2 className="mt-[-1.00px] [font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
              Create Test Series
            </h2>
            <p className="[font-family:'Inter',Helvetica] text-base font-normal leading-5 tracking-[0] text-black">
              Start creating a new test series
            </p>
          </header>
          <form className="flex flex-col gap-7">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[34px]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                    Title*
                  </Label>
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#e02323]">
                    0/60
                  </span>
                </div>
                <Input
                  defaultValue=""
                  placeholder="Enter Mock Test Title"
                  className="h-auto rounded-[10px] border border-solid bg-white px-2.5 py-2.5 text-sm text-gray-500 shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="[font-family:'Roboto',Helvetica] px-0 py-2 text-base font-medium leading-6 tracking-[0] text-title">
                  Price
                </Label>
                <Input
                  defaultValue=""
                  placeholder="Price"
                  className="h-auto rounded-[10px] border border-solid bg-white px-2.5 py-2.5 text-sm text-gray-500 shadow-sm"
                />
                <div className="flex justify-end pt-1">
                  <label className="flex cursor-pointer items-center gap-2.5 p-2.5">
                    <Checkbox className="h-4 w-4 rounded-sm border-[#0957a1] data-[state=checked]:border-[#0957a1] data-[state=checked]:bg-[#0957a1]" />
                    <span className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-black">
                      Make this a free mock test
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                Quiz Type
              </Label>
              <RadioGroup
                value={quizType}
                onValueChange={setQuizType}
                className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[22px]"
              >
                {quizTypes.map((type) => (
                  <Label
                    key={type.id}
                    htmlFor={type.id}
                    className="flex cursor-pointer rounded-[10px] border border-solid bg-white px-2.5 py-6"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem
                          value={type.id}
                          id={type.id}
                          className="h-4 w-4 border-[#0957a1] text-[#0957a1]"
                        />
                        <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                          {type.title}
                        </span>
                      </div>
                      <span className="pl-7 [font-family:'Roboto',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-black">
                        {type.description}
                      </span>
                    </div>
                  </Label>
                ))}
              </RadioGroup>
            </div>
            <div className="max-w-[500px]">
              <div className="mb-2 flex items-center gap-3">
                <Label className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                  Select Template
                </Label>
              </div>
              <Select>
                <SelectTrigger className="h-auto w-full rounded-[10px] border border-solid bg-white p-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                  <SelectValue placeholder="Select" />
                  <ChevronDownIcon className="h-5 w-5 opacity-100" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select">Select</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-end gap-3 pt-8">
              <Button className="h-auto min-w-[96px] rounded-lg bg-[#0957a1] px-8 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] text-white hover:bg-[#0957a1]/90">
                Create
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="h-auto min-w-[96px] rounded-lg bg-[#dbeeff] px-8 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 tracking-[0] text-gray-900 hover:bg-[#dbeeff]/90"
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
