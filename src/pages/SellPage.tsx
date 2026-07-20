import { useState } from 'react'
import Input from '@/components/ui/Input'
import { BookOpen, Calendar, Video } from 'lucide-react'

type ProductType = 'book' | 'event' | 'webinar'

const productTypes: { type: ProductType; icon: typeof BookOpen; label: string }[] = [
  { type: 'book', icon: BookOpen, label: 'Book' },
  { type: 'event', icon: Calendar, label: 'Event' },
  { type: 'webinar', icon: Video, label: 'Webinar' },
]

export function SellPage() {
  const [selectedType, setSelectedType] = useState<ProductType>('book')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-lg font-manrope font-bold mb-4 text-ink">Create a Listing</h1>

      <div className="grid grid-cols-3 gap-3 mb-6">
        {productTypes.map((pt) => {
          const Icon = pt.icon
          return (
            <button
              key={pt.type}
              onClick={() => setSelectedType(pt.type)}
              className={`p-4 border rounded-[7px] text-center cursor-pointer transition-colors ${
                selectedType === pt.type
                  ? 'border-red-karlabash bg-red-karlabash/5'
                  : 'border-line bg-white hover:border-charcoal/30'
              }`}
            >
              <Icon className="w-8 h-8 mx-auto text-red-karlabash" />
              <p className="font-semibold text-sm mt-2 text-ink">{pt.label}</p>
            </button>
          )
        })}
      </div>

      <div className="space-y-4 max-w-lg">
        <Input
          label="Title"
          value={title}
          onChange={(val) => setTitle(val)}
          placeholder="Enter title"
        />
        <Input
          label="Price (GHS)"
          type="number"
          value={price}
          onChange={(val) => setPrice(val)}
          placeholder="0.00"
        />
        <div>
          <label className="block text-sm font-semibold mb-1 text-ink">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-line rounded-[7px] px-3 py-2 text-sm focus:outline-none focus:border-red-karlabash bg-white"
            rows={4}
            placeholder="Describe your product"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-ink">Upload</label>
          <div className="border-2 border-dashed border-line rounded-[7px] p-6 text-center cursor-pointer hover:border-charcoal/30 transition-colors">
            <p className="text-charcoal text-sm">Drag and drop or click to upload</p>
          </div>
        </div>
        <button className="w-full h-11 bg-red-karlabash text-white rounded-[7px] font-semibold text-sm">
          Publish
        </button>
      </div>
    </div>
  )
}
