import { Suspense } from "react";
import ProfileContent from "./ProfileContent";
import { Spinner } from "@heroui/react";

export const dynamic = 'force-dynamic';



const ProfilePage = () => {
    return (
        <Suspense 
        fallback={<div className="flex flex-col items-center gap-2">
                <Spinner size="lg" />
                <span className="text-xs text-muted">Large</span>
              </div>}>
            <ProfileContent />
        </Suspense>
    );
};

export default ProfilePage;