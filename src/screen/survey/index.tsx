import {
  useWuShowToast,
  WuButton,
  WuInput,
} from "@npm-questionpro/wick-ui-lib";
import useSurveyData from "../../hooks/useSurvey";
import { useState } from "react";

export const Survey: React.FC = () => {
  const { surveys } = useSurveyData();

  const [isNewDashboard, setIsNewDashboard] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { showToast: showError } = useWuShowToast({ variant: "error" });
  const [name, setName] = useState<string>("");

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value) {
      setErrorMessage("");
    }
  };

  const handleCreateDashboard = (): void => {
    if (isNewDashboard) {
      if (!name) {
        setErrorMessage("Survey name should not be empty");
        showError("Survey name should not be empty");
        setIsNewDashboard(true);
      } else {
        setErrorMessage("");
        setIsNewDashboard(false);
      }
    } else {
      setIsNewDashboard(true);
    }
  };

  return (
    <div className="flex flex-col p-10 w-full">
      <div className="flex items-start h-[60px] gap-6">
        {isNewDashboard && (
          <WuInput
            placeholder="Enter survey name"
            autoFocus
            className="gap-0 w-[300px]"
            onChange={handleChangeName}
            errorMessage={errorMessage}
            value={name}
          />
        )}
        <WuButton onClick={handleCreateDashboard}>
          {isNewDashboard ? "Create dashboard" : "New dashboard"}
        </WuButton>
        <WuButton onClick={handleCreateDashboard} variant="secondary">
          Cancel
        </WuButton>
      </div>

      <table className="min-w-full bg-white border border-gray-200 w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Name
            </th>
            <th className="px-6 py-3 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Creation Date
            </th>
            <th className="px-6 py-3 border-b bg-gray-100 text-left text-sm font-semibold text-gray-600">
              Responses
            </th>
          </tr>
        </thead>
        <tbody>
          {surveys.map((survey) => (
            <tr key={survey.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 border-b text-sm text-gray-800">
                {survey.name}
              </td>
              <td className="px-6 py-4 border-b text-sm text-gray-800">
                <td className="px-6 py-4 text-sm text-gray-800">
                  {new Date(survey.creationDate)
                    .toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })
                    .replace(",", "")}
                </td>
              </td>
              <td className="px-6 py-4 border-b text-sm text-gray-800">
                {survey.responseCount}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
