"use client";

import { TeamItemProps } from "@/types/modules/team";
import { createContext, useState, ReactNode } from "react";
import type { ModalContextProps } from "@/types/context/teamModal";

export const TeamModalContext = createContext<ModalContextProps | undefined>(undefined);

export const TeamModalProvider = ({ children }: {children: ReactNode}) => {
    const [selectedMember, setSelectedMember] = useState<Pick<TeamItemProps, "id"> | null>(null);

    const openModal = (member: Pick<TeamItemProps, "id">) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null)

    return (
        <TeamModalContext.Provider value={{ selectedMember, openModal, closeModal }}>
            {children}
        </TeamModalContext.Provider>
    )

}
