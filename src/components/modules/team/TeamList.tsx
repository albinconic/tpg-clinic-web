import { TeamListProps } from "@/types/modules/team";
import clsx from "clsx";
import {teamData} from "@/constants/team";
import TeamItem from "./TeamItem";
 

const TeamList = ({
    containerProps,
    teamMembers,
    title,
}: TeamListProps) => {
    const {className: containerClassName, ...containerPropsRest} = containerProps ?? {};
    let teamList = teamMembers || teamData;

  return (
    <div className={clsx("container-17", containerClassName)} {...containerPropsRest}>
        <h2 className="centered-heading">{title || "Meet Your Doctors"}</h2>
        <div className="team-grid">

            {teamList.map((teamMember) => (
                <TeamItem 
                    key={teamMember.id} 
                    {...teamMember} 
                />
            ))}
        </div>
    </div>
  );
}

export default TeamList;