import {
  IWuSwitcherOptions,
  WuButton,
  WuCheckbox,
  WuInput,
  WuStepper,
  WuSwitcher,
  WuTextarea,
} from "@npm-questionpro/wick-ui-lib";
import { useState } from "react";

const subscriptionOpt: IWuSwitcherOptions<number> = [
  {
    label: "Premium",
    value: 0,
  },
  {
    label: "Free",
    value: 1,
  },
];

export const User: React.FC = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(20);
  const [subscription, setSubscription] = useState(0);
  console.log("gender", gender);
  console.log("age", age);
  console.log("subscription", subscription);

  return (
    <div className="p-10 flex item-center justify-center w-full">
      <div className="flex flex-col gap-4 bg-gray-200 h-fit p-6 w-1/2">
        <WuInput
          label="Enter your name"
          placeholder="Write your name"
          className="w-full"
          required
        />
        <WuInput
          label="Enter your email"
          placeholder="Write your email"
          className="w-full"
          required
        />
        <WuInput
          label="Enter your password"
          placeholder="Write your password"
          className="w-full"
          type="password"
        />
        <WuInput
          label="Enter your phone"
          placeholder="Write your phone"
          className="w-full"
          type="tel"
        />
        <WuTextarea
          label="Enter your address"
          placeholder="Write your address"
          className="w-full"
          rows={4}
        />
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <label htmlFor="gender" className="text-[#545E6B] text-sm">
              Gender
            </label>
            <div className="flex gap-4 text-[#545E6B]">
              <WuCheckbox
                label="Male"
                value="male"
                onChange={() => setGender("male")}
                checked={gender === "male"}
              />
              <WuCheckbox
                label="Female"
                value="female"
                onChange={() => setGender("female")}
                checked={gender === "female"}
              />
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <label className="text-[#545E6B] text-sm">Age</label>
            <WuStepper
              defaultValue={20}
              max={100}
              min={20}
              onChange={setAge}
              step={1}
            />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <label htmlFor="subscription" className="text-[#545E6B] text-sm">
            Subscription
          </label>
          <WuSwitcher
            onChange={(e) => setSubscription(e as number)}
            options={subscriptionOpt}
            type="tab"
            value={0}
          />
        </div>
        <WuButton type="submit" className="m-auto">
          Submit
        </WuButton>
      </div>
    </div>
  );
};
