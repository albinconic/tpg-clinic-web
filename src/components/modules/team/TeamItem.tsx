"use client";

import ImageElement from "@/components/ui/ImageElement";
import { TeamItemProps } from "@/types/modules/team";
import { useTeamModal } from "@/hooks/useTeamModal";


const TeamItem = ({
    id, 
    image, 
    name, 
    qualifications, 
    position, 
    buttonText = "Read Bio"
 }: TeamItemProps) => {
    const { openModal } = useTeamModal();

    const handleClick = () => {
        openModal({
            id
        });
    }

    return (
        <div id={id} className="team-card">
            <ImageElement
                className="team-member-image"
                {...image}
            />
            <div className="team-member-name">{name}</div>
            <div className="qualifications">{qualifications}</div>
            <div className="team-member-position">{position}</div>
            <p onClick={handleClick} data-id={id} className="read-bio button-2 adelle">{buttonText}</p>
        </div>
    );
};

export default TeamItem;