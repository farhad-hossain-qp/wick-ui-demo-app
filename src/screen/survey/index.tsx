import {
  useWuShowToast,
  WuButton,
  WuInput,
  WuModal,
  WuModalContent,
  WuModalHeader,
  WuTable,
  WuTooltip,
} from "@npm-questionpro/wick-ui-lib";
import useSurveyData from "../../hooks/useSurvey";
import { useState } from "react";
import { ISurvey } from "../../models/survey.models";
import { IWuTableColumnDef } from "@npm-questionpro/wick-ui-lib/dist/src/components/table/types/IWuTableColumnDef";
import { MdModeEditOutline, MdPreview, MdDelete } from "react-icons/md";

export const Survey: React.FC = () => {
  const { surveys } = useSurveyData();

  const [isNewDashboard, setIsNewDashboard] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { showToast: showError } = useWuShowToast({ variant: "error" });
  const [name, setName] = useState<string>("");

  const [filterText, setFilterText] = useState<string>("");
  const [viewSurvey, setViewSurvey] = useState<ISurvey | undefined>(undefined);

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

  const columns: IWuTableColumnDef<ISurvey>[] = [
    { accessorKey: "id", header: "ID", sortable: true },
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
      accessorKey: "responseCount",
      header: "Response count",
      sortable: true,
      cell: ({ row }) => {
        return (
          <div className="min-w-[150px]">{row.original.responseCount}</div>
        );
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => {
        return (
          <div className="truncate max-w-[400px]">
            {row.original.description}
          </div>
        );
      },
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
          const survey = surveys.find((s) => s.id == Number(row.original.id));
          setViewSurvey(survey);
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
        <WuButton onClick={() => setIsNewDashboard(false)} variant="secondary">
          Cancel
        </WuButton>
      </div>

      <WuInput
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: "10px" }}
        className="w-[500px]"
      />
      <WuTable
        data={surveys}
        columns={columns}
        sort={{ enabled: true }}
        filterText={filterText}
      />

      {viewSurvey?.id && (
        <WuModal
          open={Boolean(viewSurvey.id)}
          onOpenChange={() => setViewSurvey(undefined)}
        >
          <WuModalHeader>Survey details</WuModalHeader>
          <WuModalContent>{viewSurvey.description}</WuModalContent>
        </WuModal>
      )}
    </div>
  );
};
