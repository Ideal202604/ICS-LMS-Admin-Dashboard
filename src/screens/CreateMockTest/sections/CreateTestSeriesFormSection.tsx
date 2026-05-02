import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
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

export const CreateTestSeriesFormSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [isFreeMockTest, setIsFreeMockTest] = useState(false);
  const [quizType, setQuizType] = useState("online");
  const [title, setTitle] = useState("");

  const handleCancel = () => {
    navigate("/mock-test");
  };

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/mock-test");
  };

  return (
    <section className="relative w-full">
      <Card className="w-full rounded-[10px] border-[0.5px] border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040] transition-shadow duration-300 hover:shadow-[-1px_1px_8px_#00000030]">
        <CardContent className="p-0">
          <form className="flex flex-col gap-8 px-[14px] pb-5 pt-[22px] sm:px-6 sm:pb-6 sm:pt-[27px]" onSubmit={handleCreate}>
            <header className="flex flex-col gap-1 rounded-[10px] bg-white py-1">
              <h2 className="m-0 [font-family:'Inter',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-black">
                Create Test Series
              </h2>
              <p className="m-0 [font-family:'Inter',Helvetica] text-base font-normal leading-5 tracking-[0] text-black">
                Start creating a new test series
              </p>
            </header>
            <div className="grid grid-cols-1 gap-x-[18px] gap-y-4 lg:grid-cols-2 lg:gap-x-[34px]">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label className="px-0 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                    Title*
                  </Label>
                  <span className="[font-family:'Roboto',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#e02323]">
                    {title.length}/60
                  </span>
                </div>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value.slice(0, 60))}
                  placeholder="Enter Mock Test Title"
                  className="h-[41px] rounded-[10px] border shadow-shadow-xs [font-family:'Roboto',Helvetica] text-sm text-gray-500 placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="px-0 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                  Price
                </Label>
                <Input
                  defaultValue=""
                  placeholder="Price"
                  disabled={isFreeMockTest}
                  className="h-[41px] rounded-[10px] border shadow-shadow-xs [font-family:'Roboto',Helvetica] text-sm text-gray-500 placeholder:text-gray-500 transition-colors duration-200 focus:border-[#0957a1] disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <div className="flex justify-end pt-1">
                  <label className="inline-flex cursor-pointer items-center gap-2.5 p-2.5 group">
                    <Checkbox
                      checked={isFreeMockTest}
                      onCheckedChange={(checked) =>
                        setIsFreeMockTest(checked === true)
                      }
                      className="h-4 w-4 rounded-sm border-[#0957a1] transition-colors duration-200 data-[state=checked]:border-[#0957a1] data-[state=checked]:bg-[#0957a1] data-[state=checked]:text-white"
                    />
                    <span className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-none tracking-[0] text-black group-hover:text-[#0957a1] transition-colors duration-200">
                      Make this a free mock test
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <section className="flex flex-col gap-2">
              <h3 className="m-0 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                Quiz Type
              </h3>
              <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2 lg:gap-[20px]">
                {quizTypes.map((type) => {
                  const isSelected = quizType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setQuizType(type.id)}
                      className={`flex min-h-[120px] flex-col items-start rounded-[10px] border bg-white px-2.5 py-6 text-left transition-all duration-250 hover:border-[#0957a1]/50 hover:shadow-md ${isSelected ? "border-[#0957a1] shadow-sm" : "border-gray-200"}`}
                    >
                      <div className="inline-flex items-center gap-3">
                        <div className="inline-flex items-center gap-2 rounded-lg px-0 py-2">
                          <span
                            className={`relative h-4 w-4 rounded-full border border-solid transition-colors duration-200 ${isSelected ? "border-[#0957a1]" : "border-[#0957a1]"}`}
                            aria-hidden="true"
                          >
                            {isSelected && (
                              <span className="absolute inset-[3px] rounded-full bg-[#0957a1] transition-transform duration-200 scale-100" />
                            )}
                          </span>
                          <span className="[font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                            {type.title}
                          </span>
                        </div>
                      </div>
                      <div className="inline-flex items-center justify-center gap-2.5 px-[9px] pl-6">
                        <span className="[font-family:'Roboto',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-black">
                          {type.description}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
            <section className="flex max-w-[500px] flex-col">
              <Label className="inline-flex items-center gap-3 px-0 py-2 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title">
                Select Template
              </Label>
              <Select>
                <SelectTrigger className="h-[41px] w-full rounded-[10px] border bg-white px-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-title transition-colors duration-200 focus:ring-[#0957a1]">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="template-1">Template 1</SelectItem>
                  <SelectItem value="template-2">Template 2</SelectItem>
                  <SelectItem value="template-3">Template 3</SelectItem>
                </SelectContent>
              </Select>
            </section>
            <footer className="flex w-full justify-end gap-3 pt-1">
              <Button
                type="submit"
                className="h-auto min-w-[92px] rounded-lg bg-[#0957a1] px-8 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-white hover:bg-[#084b8a] transition-colors duration-200 active:scale-[0.98] transform"
              >
                Create
              </Button>
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancel}
                className="h-auto min-w-[92px] rounded-lg bg-[#dbeeff] px-8 py-2 [font-family:'Roboto',Helvetica] text-base font-bold leading-6 text-gray-900 hover:bg-[#c2def8] transition-colors duration-200 active:scale-[0.98] transform"
              >
                Cancel
              </Button>
            </footer>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
