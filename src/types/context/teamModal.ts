import { TeamItemProps } from "../modules/team";

export type ModalContextProps = {
    selectedMember: Pick<TeamItemProps, "id"> | null;
    openModal: (member: Pick<TeamItemProps, "id">) => void;
    closeModal: () => void;
}