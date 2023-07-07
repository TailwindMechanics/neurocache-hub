//path: src\app\features\settings\profilesettings\profileSettings.tsx

import TitleCard from "@/app/components/Cards/TitleCard";
import InputText from "@/app/components/Input/InputText";
import TextAreaInput from "@/app/components/Input/TextAreaInput";
import { useDispatch } from "react-redux";
import { showNotification } from "../../common/headerSlice";
import ToggleInput from "@/app/components/Input/ToggleInput";
import { FC } from "react";

interface UpdateFormValueArgs {
    updateType: string;
    value: string;
}

interface UpdateFormValueArgsToggle {
    updateType: string;
    value: boolean;
}

const ProfileSettings: FC = () => {
    const dispatch = useDispatch();

    // Call API to update profile settings changes
    const updateProfile = () => {
        dispatch(showNotification({ message: "Profile Updated", status: 1 }));
    };

    const updateFormValue = ({ updateType, value }: UpdateFormValueArgs) => {
        console.log(updateType);
    };

    const updateFormValueToggle = ({ updateType, value }: UpdateFormValueArgsToggle) => {
        console.log(updateType);
    };

    return (
        <>
            <TitleCard title="Profile Settings" topMargin="mt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Name" defaultValue="Alex" updateFormValue={updateFormValue} updateType="" />
                    <InputText labelTitle="Email Id" defaultValue="alex@dashwind.com" updateFormValue={updateFormValue} updateType="" />
                    <InputText labelTitle="Title" defaultValue="UI/UX Designer" updateFormValue={updateFormValue} updateType="" />
                    <InputText labelTitle="Place" defaultValue="California" updateFormValue={updateFormValue} updateType="" />
                    <TextAreaInput labelTitle="About" defaultValue="Doing what I love, part time traveller" updateFormValue={updateFormValue} updateType="" />
                </div>
                <div className="divider"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputText labelTitle="Language" defaultValue="English" updateFormValue={updateFormValue} updateType="" />
                    <InputText labelTitle="Timezone" defaultValue="IST" updateFormValue={updateFormValue} updateType="" />
                    <ToggleInput updateType="syncData" labelTitle="Sync Data" defaultValue={true} updateFormValue={updateFormValueToggle} />
                </div>
                <div className="mt-16"><button className="btn btn-primary float-right" onClick={() => updateProfile()}>Update</button></div>
            </TitleCard>
        </>
    );
};

export default ProfileSettings;
