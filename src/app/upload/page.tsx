import Dropzone from "@/components/ui/dropzone"

const page = () => {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
        <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
>
        <div className="flex flex-col items-center gap-1 text-center">
            <section className='section'>
                <div className='container'>
                <h1 className='title text-3xl font-bold'>Upload Files</h1>
                <Dropzone className='p-16 mt-10 border border-neutral-200'/>
                </div>
            </section>
        </div>
    </div>
  </div>
  )
}

export default page