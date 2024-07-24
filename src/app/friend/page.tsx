import Friend from "@/components/MobileMenu/Friend";
import FriendRequests from "@/components/rightMenu/FriendRequests";

const friendpage = () => {
    return (
        <div className='pt-6 pb-6'>
            <Friend />
            <div className="pt-6 pb-24">
                <FriendRequests />
            </div>
        </div>
    )
}

export default friendpage;