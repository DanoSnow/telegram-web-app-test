import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'
import { CellDetailsParams } from '../../types/cell'

interface CellDetailsProps {
    cellDetails: CellDetailsParams
}

const CellDetails = ({ cellDetails }: CellDetailsProps) => {
    const [cellDetailsState, setCellDetailsState] = useState(cellDetails);
    useEffect(() => {
        setCellDetailsState(cellDetails)
    }, [cellDetails]);

    return (
        <>
            <Dialog open={cellDetailsState.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={cellDetailsState.onClose}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex flex-col min-h-full items-center justify-center rounded-none">
                        <DialogPanel transition
                            className="w-screen h-screen rounded-xl bg-neutral-100 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-center"
                        >
                            <DialogTitle as="h3" className="w-full text-black font-medium flex justify-between items-center">
                                <div className='w-full '>
                                    {/* Keep in mind the name object */}
                                    {`${cellDetailsState.name.en} (${cellDetailsState.x}, ${cellDetailsState.y})`}
                                    {/* Keep in mind the name object */}
                                </div>
                                <div className='w-full flex flex-row-reverse'>
                                    <Button
                                        onClick={cellDetailsState.onClose}
                                        className="inline-flex items-center gap-2 rounded-full py-3 px-3 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-neutral-300 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer"
                                    >
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </Button>
                                </div>
                            </DialogTitle>
                            <div>
                                <img src={cellDetailsState.pictureLink} className="rounded-md shadow-lg" />
                            </div>
                            <div className='flex flex-col items-center justify-start space-y-1 my-2'>
                                <p>Level: <span className='font-bold'>{cellDetailsState.level}</span></p>
                                {/* Keep in mind the description object */}
                                <p>{cellDetailsState.description.en}</p>
                                {/* Keep in mind the description object */}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default CellDetails
