import { Suspense } from "react";
import ProfileContent from "./ProfileContent";

export const dynamic = 'force-dynamic';



const ProfilePage = () => {
    return (
        <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
            <ProfileContent />
        </Suspense>
    );
};

export default ProfilePage;