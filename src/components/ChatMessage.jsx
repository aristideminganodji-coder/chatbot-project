import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'

export function ChatMessage({ message,sender }) {

    return (
        <div>
            {sender === "robot" && (
                <img src={RobotProfileImage} width="40" />
            )}
            {message}
            {sender === "user" && (
                <img src={UserProfileImage} width="40" />
            )}
        </div>
    );
}