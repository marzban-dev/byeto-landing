import Image, { StaticImageData } from "next/image";

export type ProfileProps = {
    image: StaticImageData,
    name: string;
    job : string;
    setIsHovered: (isHovered: boolean) => void;
}

const Profile = ({ setIsHovered, image, name, job }: ProfileProps) => {
    //
    // const renderSkills = () => {
    //     return skills.map((skill) => {
    //         return (
    //             <div className="flex justify-center items-center" title={skill.title} key={skill.title}>
    //                 <i className={`text-[1.5rem] 2xs:text-[1.25rem] sm:text-[1.6rem] text-primary ${skill.icon}`}></i>
    //             </div>
    //         );
    //     });
    // };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="shadow-black/50 shadow-2xl rounded-[15px] xs:rounded-[20px] relative bg-black max-lg:flex-1 lg:w-[100px] h-[400px] 2xs:h-[300px] xs:h-[350px] sm:h-[400px] lg:h-[500px] overflow-hidden group max-lg:hover:flex-[4] lg:hover:w-[400px] transition-all duration-700">
            <div
                className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent z-10"></div>
            <div
                className="z-20 text-[1.4rem] 2xs:text-[0.8rem] xs:text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium text-white absolute bottom-6 2xs:bottom-4 xs:bottom-6 lg:bottom-8 sm:group-hover:left-8 left-6 2xs:left-4 xs:left-8 sm:left-1/2 whitespace-nowrap group-hover:rotate-0 sm:-rotate-90 origin-left transition-all duration-700">
                <div
                    className="text-slate-300 text-sm 2xs:text-xs md:text-sm z-20 absolute bottom-10 2xs:bottom-6 xs:bottom-7 md:bottom-10 sm:group-hover:opacity-100 sm:opacity-0 transition-all duration-700">
                    {job}
                </div>
                <span>{name}</span>
            </div>
            <Image src={image} alt="" className="object-cover" fill />
        </div>
    );
};

export default Profile;