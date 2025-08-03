"use client";

import { TeamListProps } from "@/types/modules/team";
import {teamData} from "@/constants/team";
import ImageElement from "@/components/ui/ImageElement";
import { useTeamModal } from "@/hooks/useTeamModal";
 

const TeamPopupMoreInfo = ({ 
    teamMembers, 
    containerProps, 
 }: TeamListProps) => {
    const {className: containerClassName, ...containerPropsRest} = containerProps ?? {};
    const teamList = teamMembers || teamData;

    const { selectedMember, closeModal } = useTeamModal();  

  return (
    <>
        {teamList.map((teamMember) => (
        <div onClick={closeModal} key={teamMember.id} className={`${teamMember.id}-model-wrapper popup-modal-wrapper ${teamMember.id === selectedMember?.id ? "active" : ""}`} {...containerPropsRest}>
            <div data-w-id="c6e65f7c-daca-7b98-b234-92d71fbf33ca" className="model-background"></div>
            <div className={`team-card ${teamMember.id}-bio-popup`}>
                <ImageElement
                    onClick={closeModal}
                    className="model-close-button"
                    src={'images/1544641784.svg'}
                />
                <div className="team-member-name">{teamMember.name}</div>
                <div className="qualifications">{teamMember.qualifications}</div>
                <div className="team-member-position">{teamMember.position}</div>
                <p className="bio">{teamMember.bio}</p>
            </div>
        </div>
        ))}
    </>
    
  );
};

export default TeamPopupMoreInfo;