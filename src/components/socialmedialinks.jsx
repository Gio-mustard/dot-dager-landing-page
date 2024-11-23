import "./socialmedialinks.css"
const SocialMediaLinks = ({hasShadow=false})=>{
    const media_link_class = "media-link" + (hasShadow?" has-shadow":"")
    return(
        <div className="social-media-links">
            
            <a className={`${media_link_class} linkedin`} href="https://www.linkedin.com/in/mariano-luis-villa/?locale=en_US" target="_blank">
                <img src="/public/icons/linkedin.png"/>
            </a>
            <a className={`${media_link_class} twitch`} href="https://www.twitch.tv/dagerxiv" target="_blank">
                <img src="/public/icons/twitch.png"/>
            </a>
            <a className={`${media_link_class} youtube`} href="https://www.youtube.com/@DotDager" target="_blank">
                <img src="/public/icons/youtube.png"/>
            </a>
            <a className={`${media_link_class} github`} href="https://github.com/MarianoVilla" target="_blank">
                <img src="/public/icons/github.png"/>
            </a>
            <a className={`${media_link_class} discord`} href="https://discord.gg/4NFk6TamAB" target="_blank">
                <img src="/public/icons/discord.png"/>
            </a>
            
            
        </div>
    )
}
export default SocialMediaLinks;