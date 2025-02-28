const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" className="border-2 border-gray-500 p-2 m-2" />
                <input type="text" placeholder="Message" className="border-2 border-gray-500 p-2 m-2" />
                <button className="bg-blue-500 text-white rounded-lg p-2 m-2">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact;