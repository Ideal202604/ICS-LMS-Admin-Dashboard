import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";

const fieldLabels = {
  title: "Live Class",
  description: "Short Description",
  thumbnail: "Thumbnail",
  instructor: "Instructor",
  tags: "Tags",
};

const selectFields = [
  {
    label: fieldLabels.instructor,
    placeholder: "Select instructor",
    value: "select-instructor",
  },
  {
    label: "",
    placeholder: "Select Category",
    value: "select-category",
  },
];

export const LiveClassDetailsSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full rounded-[10px] border border-gray-300 bg-white shadow-[-1px_1px_4px_#00000040]">
        <CardContent className="p-4 sm:p-5">
          <form className="flex w-full flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="live-class-title"
                className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900"
              >
                {fieldLabels.title}
              </label>
              <Input
                id="live-class-title"
                defaultValue=""
                placeholder="Enter your live class title"
                className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)] transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="short-description"
                className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900"
              >
                {fieldLabels.description}
              </label>
              <Input
                id="short-description"
                defaultValue=""
                placeholder="Enter a brief description for the live Class (Max 150 characters)"
                className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)] transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <h2 className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                {fieldLabels.thumbnail}
              </h2>
              <label
                htmlFor="thumbnail-upload"
                className="flex min-h-[212px] w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border border-dashed border-gray-300 bg-white px-3 py-6 shadow-[var(--shadow-xs)] transition-all duration-200 hover:border-[#0957a1]/50 hover:bg-blue-50/30"
              >
                <input id="thumbnail-upload" type="file" accept="image/png,image/jpeg,image/gif" className="sr-only" />
                <img
                  className="h-[81px] w-[81px] opacity-60"
                  alt="Upload image"
                  src="https://c.animaapp.com/molezics5Di2af/img/ion-image.svg"
                />
                <p className="max-w-[313px] text-center [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500">
                  Drag and drop an image, or click to upload.
                  <br />
                  Minimum dimension: 800x450px.
                  <br />
                  Maximum file size: 2MB.
                  <br />
                  Accepted file types: png, jpeg, gif
                </p>
              </label>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
              {selectFields.map((field, index) => (
                <div
                  key={`${field.placeholder}-${index}`}
                  className={`flex flex-col gap-2.5 ${field.label ? "" : "md:pt-[42px]"}`}
                >
                  {field.label ? (
                    <label className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900">
                      {field.label}
                    </label>
                  ) : null}
                  <Select>
                    <SelectTrigger className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)]">
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={field.value}>
                        {field.placeholder}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2.5">
              <label
                htmlFor="tags"
                className="[font-family:'Roboto',Helvetica] text-2xl font-semibold leading-8 tracking-[0] text-gray-900"
              >
                {fieldLabels.tags}
              </label>
              <Input
                id="tags"
                defaultValue=""
                placeholder="Add Tags (optional)"
                className="h-11 rounded-[10px] border-gray-300 bg-white px-3 py-2.5 [font-family:'Roboto',Helvetica] text-base font-medium leading-6 tracking-[0] text-gray-500 shadow-[var(--shadow-xs)] transition-all duration-200 focus-visible:ring-1 focus-visible:ring-[#0957a1]/40"
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
