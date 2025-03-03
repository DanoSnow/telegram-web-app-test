import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState, useEffect } from 'react'

interface TileDetailsProps {
  name: string;
  type: string;
  x: number;
  y: number;
  level: number;
  description: string;
  pictureLink: string;
  npcList?: string[];
  mobList?: string[];
  buildingList?: string[];
  randomQuestList?: string[];
  resNodeList?: string[];
  passageList?: string[];
  isOpen: boolean;
  onClose: () => void;
}

const TileDetails = ({
  name, type, x, y, level, description, pictureLink, npcList, mobList, buildingList, randomQuestList, resNodeList, passageList, isOpen, onClose
}: TileDetailsProps) => {
  const [tileDetailsState, setTileDetailsState] = useState({
    name: name, type: type, x: x, y: y, level: level, description: description, pictureLink: pictureLink,
    npcList: npcList, mobList: mobList, buildingList: buildingList, randomQuestList: randomQuestList,
    resNodeList: resNodeList, passageList: passageList, isOpen: isOpen
  });
  useEffect(() => {
    setTileDetailsState({
      name: name, type: type, x: x, y: y, level: level, description: description, pictureLink: pictureLink,
      npcList: npcList, mobList: mobList, buildingList: buildingList, randomQuestList: randomQuestList,
      resNodeList: resNodeList, passageList: passageList, isOpen: isOpen
    });
  }, [name, type, x, y, level, description, pictureLink, npcList, mobList, buildingList, randomQuestList, resNodeList, passageList, isOpen]);

  return (
    <>
      <Dialog open={tileDetailsState.isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose}>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex flex-col min-h-full items-center justify-center rounded-none">
            <DialogPanel transition
              className="w-screen h-screen rounded-xl bg-neutral-100 shadow-lg p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 flex flex-col items-center"
            >
              <DialogTitle as="h3" className="w-full text-black font-medium flex justify-between items-center">
                <div className='w-full '>
                  {`${tileDetailsState.name} (${tileDetailsState.x}, ${tileDetailsState.y})`}
                </div>
                <div className='w-full flex flex-row-reverse'>
                  <Button
                    onClick={onClose}
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
                <img src={tileDetailsState.pictureLink} className="rounded-md shadow-lg" />
              </div>
              <div className='flex flex-col items-center justify-start space-y-1 my-2'>
                <p>Level: <span className='font-bold'>{tileDetailsState.level}</span></p>
                <p>{tileDetailsState.description}</p>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default TileDetails