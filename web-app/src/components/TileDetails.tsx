import { Button, Dialog, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'
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
        <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center p-4">
            <DialogPanel transition
              className="w-full max-w-md rounded-xl bg-neutral-100 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-center"
            >
              <DialogTitle as="h3" className="text-black font-medium">
                {`${tileDetailsState.cardinalDirection} (${tileDetailsState.X}, ${tileDetailsState.Y})`}
              </DialogTitle>
              <div>
                <img src={tileDetailsState.tileImgUrl} className="rounded-md" />
              </div>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={onClose}
                >
                  Close Window
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default TileDetails
