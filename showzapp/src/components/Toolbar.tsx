"use client"
const Toolbar = ()=> {
    return (
        <div className="relative bg-main_blue gap-x-36 h-14 items-center py-14 md:py-12 px-12 md:px-14 flex w-full justify-center bg-opacity-85 z-10">
            <div className="flex gap-3 items-center">
                <img className="w-14 h-12" src="/ticket_photo.png" />
                <p className="text-white text-3xl italic font-anton">AUDITO<span className="text-cherry_pink">RIUM</span></p>
            </div>
            <div className="flex space-x-9 items-center">
                <p className="text-white font-medium text-lg">HOME</p>
                <p className="text-white font-medium text-lg">MOVIES</p>
                <p className="text-white font-medium text-lg">EVENTS</p>
                <p className="text-white font-medium text-lg">SPORTS</p>
                <p className="text-white font-medium text-lg">PAGES</p>
                <p className="text-white font-medium text-lg">BLOG</p>
                <p className="text-white font-medium text-lg">CONTACT</p>
                <p className="py-4 px-10 text-white font-medium bg-gradient-to-r from-cherry_pink to-bright_purple rounded-full text-lg">JOIN US</p>
            </div>
        </div>
    )
}
export default Toolbar;