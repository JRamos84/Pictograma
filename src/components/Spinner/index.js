
const SpinnerLoader = () => {
  const n = 10
  return (
    <div className='grid grid-cols-2  justify-between gap-3 py-4 mx-3 h-full align-baseline'>
      {[...Array(n)].map((e, i) => (
        <div key={i}>
          <div className='border border-blue-300 shadow rounded-3xl p-3 max-w-sm w-full mx-auto bg-white h-32'>
            <div className='animate-pulse flex flex-col justify-items-center  align-middle '>
              <div className='flex justify-center'>
                <div className='rounded-2xl bg-slate-300 h-20 w-20' />
              </div>
              <div className=' flex flex-1 space-y-2 py-2 justify-center'>
                <div className='h-3 w-12 bg-slate-300 rounded' />
              </div>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default SpinnerLoader
