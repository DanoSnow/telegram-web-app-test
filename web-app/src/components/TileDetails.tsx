import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'

interface TileDetailsProps {
  cardinalDirection: 'NW' | 'NE' | 'SE' | 'SW'
  X: number
  Y: number
  tileImgUrl: string
  isOpen: boolean
  onClose: () => void
}

const TileDetails = ({ cardinalDirection, X, Y, tileImgUrl, isOpen, onClose }: TileDetailsProps) => {
  const [tileDetailsState, setTileDetailsState] = useState({
    cardinalDirection: cardinalDirection,
    X: X, Y: Y, tileImgUrl: tileImgUrl, isOpen: isOpen
  });

  useEffect(() => {
    setTileDetailsState({
      cardinalDirection: cardinalDirection,
      X: X, Y: Y, tileImgUrl: tileImgUrl, isOpen: isOpen
    });
  }, [cardinalDirection, X, Y, tileImgUrl, isOpen]);

  return (
    <>
      <Dialog open={tileDetailsState.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
        {/* <DialogBackdrop className="fixed inset-0 bg-black/30" /> */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center rounded-none">
            <DialogPanel transition
              className="w-screen h-screen rounded-xl bg-neutral-100 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-center"
            >
              <DialogTitle as="h3" className="w-full text-black font-medium flex justify-between items-center">
                <div className='w-full '>
                  {`${tileDetailsState.cardinalDirection} (${tileDetailsState.X}, ${tileDetailsState.Y})`}
                </div>
                <div className='w-full flex flex-row-reverse'>
                  <Button
                    onClick={onClose}
                    className="inline-flex items-center gap-2 rounded-full py-3 px-3 text-sm/6 font-semibold text-gray-500 shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-neutral-300 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white cursor-pointer"
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </Button>
                </div>
              </DialogTitle>
              <div>
                <img src={tileDetailsState.tileImgUrl} className="rounded-md" />
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default TileDetails
