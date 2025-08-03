import { TeamModalContext } from "@/context/TeamModalContext";
import type { ModalContextProps } from "@/types/context/teamModal";
import { useContext } from "react";

export const useTeamModal = (): ModalContextProps => {
    const context = useContext(TeamModalContext);
    if ( !context ) {
        throw new Error("useTeamModal must be used within a TeamModalProvider");
    }

    return context;
}
