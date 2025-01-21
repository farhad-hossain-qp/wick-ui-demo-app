import {
  useWuShowToast,
  WuButton,
  WuInput,
  WuModal,
  WuModalContent,
  WuModalFooter,
  WuModalHeader,
  WuSelect,
  WuTable,
  WuTextarea,
  WuTooltip,
} from "@npm-questionpro/wick-ui-lib";
import { useState } from "react";
import useSurveyData from "../../hooks/useSurvey";
import { IWuOption } from "@npm-questionpro/wick-ui-lib/dist/src/components/select/types/IWuSelectOptions";
import useDashboardData from "../../hooks/dashboards";
import { IWuTableColumnDef } from "@npm-questionpro/wick-ui-lib/dist/src/components/table/types/IWuTableColumnDef";
import { IDashboard } from "../../models/dashboard.models";
import { MdModeEditOutline, MdPreview, MdDelete } from "react-icons/md";

export const PathosAIScreen: React.FC = (): React.JSX.Element => {
  const [isNewDashboard, setIsNewDashboard] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { showToast: showError } = useWuShowToast({ variant: "error" });
  const [name, setName] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [value, setValue] = useState<number>();
  const [description, setDescription] = useState("");

  const { surveys } = useSurveyData();
  const { dashboard } = useDashboardData();

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value) {
      setErrorMessage("");
    }
  };

  const handleDescriptionChange = (des: string) => {
    setDescription(des);
  };

  const handleCreateDashboard = (): void => {
    if (isNewDashboard) {
      if (!name) {
        setErrorMessage("Dashboard name should not be empty");
        showError("Dashboard name should not be empty");
        setIsNewDashboard(true);
      } else {
        setErrorMessage("");
        setIsNewDashboard(false);
        setOpenModal(true);
      }
    } else {
      setIsNewDashboard(true);
    }
  };

  const handleClose = () => {
    setName("");
    setValue(undefined);
    setOpenModal(false);
  };

  const surveyOptions: IWuOption<number>[] = surveys.map((survey) => ({
    type: "option",
    value: survey.id,
    label: survey.name,
  }));

  const columns: IWuTableColumnDef<IDashboard>[] = [
    {
      accessorKey: "",
      header: "Name",
      filterable: true,
      cell: ({ row }) => {
        return <div className="min-w-[300px]">{row.original.name}</div>;
      },
    },
    {
      accessorKey: "creationDate",
      header: "Creation date",
      sortable: true,
    },

    {
      accessorKey: "",
      header: "Action",
      cell: ({ row }) => {
        const handleEdit = () => {
          console.log("Edit clicked for ID:", row.original.id);
        };

        const handleDelete = () => {
          console.log("Delete clicked for ID:", row.original.id);
        };

        const handleView = () => {
          console.log("View clicked for ID:", row.original.id);
        };

        return (
          <div className="flex items-center space-x-2">
            <WuTooltip content="View">
              <WuButton onClick={handleView} variant="iconOnly">
                <MdPreview />
              </WuButton>
            </WuTooltip>

            <WuTooltip content="Edit">
              <WuButton onClick={handleEdit} variant="iconOnly">
                <MdModeEditOutline />
              </WuButton>
            </WuTooltip>
            <WuTooltip content="Delete">
              <WuButton onClick={handleDelete} variant="iconOnly">
                <MdDelete />
              </WuButton>
            </WuTooltip>
          </div>
        );
      },
    },
  ];

  return (
    <div className="p-8 flex flex-col w-full h-full">
      <div className="flex items-start h-[60px]">
        {isNewDashboard && (
          <WuInput
            placeholder="Write a dashboard name"
            autoFocus
            className="gap-0 w-[300px]"
            onChange={handleChangeName}
            errorMessage={errorMessage}
            value={name}
          />
        )}
        <WuButton
          onClick={handleCreateDashboard}
          className={`transition-transform duration-500 ease-in-out ${
            isNewDashboard ? "translate-x-5" : "translate-x-0"
          }`}
        >
          {isNewDashboard ? "Create dashboard" : "New dashboard"}
        </WuButton>
      </div>
      <WuTable data={dashboard} columns={columns} sort={{ enabled: true }} />

      <WuModal open={openModal} onOpenChange={handleClose} size="md">
        <WuModalHeader>Create pathos dashboard</WuModalHeader>
        <WuModalContent>
          <div className="flex flex-col gap-2 pb-2">
            <WuSelect
              options={surveyOptions}
              onSelect={(e) => setValue(e as number)}
              value={value}
              placeholder="Select survey"
            />
            <WuTextarea
              placeholder="Write description"
              rows={5}
              value={description}
              onChange={(e) => handleDescriptionChange(e.target.value)}
            />
          </div>
          <WuModalFooter>
            <WuButton onClick={handleClose} variant="secondary">
              Cancel
            </WuButton>
            <WuButton variant="primary">Save</WuButton>
          </WuModalFooter>
        </WuModalContent>
      </WuModal>
    </div>
  );
};
