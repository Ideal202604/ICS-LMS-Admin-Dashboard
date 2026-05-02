import { Card, CardContent } from "../../../components/ui/card";
import { Checkbox } from "../../../components/ui/checkbox";

const permissions = [
  { id: "modify-event", label: "Modify event" },
  { id: "invite-others", label: "Invite others" },
  { id: "see-guest-list", label: "See guest list" },
];

export const GuestAccessSection = (): JSX.Element => {
  return (
    <section className="w-full">
      <Card className="w-full max-w-[397px] rounded-[10px] border-0 bg-white shadow-none overflow-hidden">
        <CardContent className="p-1.5 pt-[9px]">
          <header className="flex min-h-11 items-center rounded-[5px] bg-[#f1f3f4] px-3 py-2.5 shadow-sm">
            <h2 className="mt-[-1.00px] w-full font-bold [font-family:'Roboto',Helvetica] text-base leading-6 tracking-[0] text-[#595959]">
              Add Guests
            </h2>
          </header>
          <div className="ml-[15px] mt-[11px]">
            <h3 className="font-semibold [font-family:'Roboto',Helvetica] text-base leading-6 tracking-[0] text-[#595959]">
              Guests Permissions
            </h3>
            <div className="mt-2 flex flex-col gap-[9px]">
              {permissions.map((permission, index) => (
                <label
                  key={permission.id}
                  htmlFor={permission.id}
                  className={`flex items-center gap-2.5 ${index === 2 ? "mt-[2px]" : ""}`}
                >
                  <Checkbox
                    id={permission.id}
                    checked={false}
                    aria-label={permission.label}
                    className="h-5 w-5 rounded-none border-[#8b8b8b] data-[state=checked]:bg-transparent data-[state=checked]:text-[#595959]"
                  />
                  <span className="font-bold whitespace-nowrap [font-family:'Roboto',Helvetica] text-base leading-6 tracking-[0] text-[#595959]">
                    {permission.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
