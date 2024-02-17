export const LocationIcon = ({additionalClass, ...props}) => {
    return (
        <svg className={'icon i-location' + (additionalClass ? ' ' + additionalClass: '')} {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
            <path  fill="currentColor" d="M480-470q38 0 64-26t26-64q0-38-26-64t-64-26q-38 0-64 26t-26 64q0 38 26 64t64 26Zm0 257q115-104 171.5-183T708-556q0-101.968-66.035-166.984t-162-65.016Q384-788 318-722.984T252-556q0 81 56.5 159.5T480-213Zm0 167Q303-193 214.5-313T126-556q0-163.719 106.753-260.86Q339.506-914 480-914q140.494 0 247.247 97.14Q834-719.719 834-556q0 123-88.5 243T480-46Zm0-514Z"/>
        </svg>
    )
}