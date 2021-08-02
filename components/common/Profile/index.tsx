import Link from "next/link";
import Image from "next/image";
import { ProfileWrapper, AvatarImage, AvatarLetter } from "./styles";
import { useState, useEffect } from "react";

const Profile: React.FC = () => {
  type profileDataT = {
    name: string;
    email: string;
    password: string;
    image: string;
  };

  const [profileData, setProfileData] = useState<profileDataT>();

  useEffect(() => {
    const resp = localStorage.getItem("auth");
    const data = resp && JSON.parse(resp);

    data && setProfileData(data);
  }, []);

  return (
    <Link href="/profile">
      <a>
        <ProfileWrapper>
          {profileData?.image ? (
            <AvatarImage>
              <Image src={profileData.image} alt="Avatar" width={52} height={52} />
            </AvatarImage>
          ) : (
            <AvatarLetter>
              {profileData?.name.charAt(0).toUpperCase()}
            </AvatarLetter>
          )}
        </ProfileWrapper>
      </a>
    </Link>
  );
};

export default Profile;
