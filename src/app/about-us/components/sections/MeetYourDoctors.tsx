import TeamList from "@/components/modules/team/TeamList";
import TeamPopupMoreInfo from "@/components/modules/team/TeamPopupMoreInfo";
import {teamData} from "@/constants/team";

const MeetYourDoctors = () => {

    const doctorsData = teamData.filter(member => member.category === "doctor");
    const careSpecialistsData = teamData.filter(member => member.category === "care-specialist");

    return (
        <>
            <section className="team-circles">
                <TeamList 
                    title="Meet Your Doctors"
                    teamMembers={doctorsData}
                />

                <TeamList
                    title="Meet Your Patient Care Specialists"
                    teamMembers={careSpecialistsData}
                />

            </section>

            <TeamPopupMoreInfo 
                teamMembers={doctorsData}            
            />
            <TeamPopupMoreInfo 
                teamMembers={careSpecialistsData}            
            />
        </>
    )
}

export default MeetYourDoctors;