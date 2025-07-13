const logs = [
    {
        title: "The case for Digital Sovereignty",
        snippet: "With big tech and government growing increasingly insistent on invading your privacy while simultaneously making us more and more reliant on them and technology, we need sources on how to take back our digital autonomy."
    },
]

export default function Log () {
    return (

        <div className="flex justify-center bg-noFace-500 text-fog-500 min-h-screen font-mono">

            <main className="w-full">

            <div className="flex flex-col items-center p-5">
                <h2 className="font-sans text-spiritGold-100 text-3xl">Find past logs here</h2>
            </div>

            <div className="space-y-6 p-6">
                {logs.map((log, index) => (
                    <div
                        key={index}
                        className="border-b-2 bg-noFace-100 border-noFace-500 rounded-xl p-6"
                    >
                    <h2 className="pb-2 text-moss-100 text-xl">{log.title}</h2>
                    <p className="pb-3">{log.snippet}</p>
                    </div>
                ))}
            </div>
                
            </main>

        </div>

    );
}

export { logs };