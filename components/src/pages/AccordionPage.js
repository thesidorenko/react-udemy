import Accordion from '../components/Accordion'

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: 'Qui eiusmod irure aute in occaecat cupidatat culpa eiusmod reprehenderit laborum elit.',
      content:
        'Anim est labore occaecat dolore velit. Sit eiusmod voluptate laborum ad.Exercitation est nisi cillum proident exercitation enim in minim ex.',
    },
    {
      id: 2,
      label: 'Consectetur magna amet do duis duis nostrud aliqua do minim cillum sunt.',
      content:
        'Cupidatat amet esse veniam laborum proident quis occaecat est cupidatat ad quis ipsum. Sit eiusmod voluptate laborum ad.Exercitation est nisi cillum proident exercitation enim in minim ex.',
    },
    {
      id: 3,
      label: 'Pariatur qui dolor ea qui officia voluptate aliquip laborum eu minim do.',
      content:
        'Proident Lorem veniam fugiat cillum ut Lorem nulla laborum laboris aute commodo nulla. Sint dolore nostrud excepteur proident in proident laborum.',
    },
  ]

  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default AccordionPage
