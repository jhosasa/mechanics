import Input from "@/components/ui/Input";

export default function InputWithLabel({
  labelText,
  classNameContainer = "",
  classNameInput = "",
  classNameLabel = "",
  labelPosition = "after",
  ...props
}: any) {
  return (
    <div className={`flex items-center gap-3 ${classNameContainer}`}>
      {labelPosition === "before" && (
        <label className="font-semibold">{labelText}</label>
      )}
      <Input className={classNameInput} {...props} />
      {labelPosition === "after" && (
        <label className="font-semibold">{labelText}</label>
      )}
    </div>
  );
}
