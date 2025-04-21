"use client"

import { useState, useActionState } from "react"
import { Send } from "lucide-react"
import { submitContactForm, type ContactFormState } from "@/app/actions"

export function ContactForm() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(submitContactForm, {})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    await formAction(formData)
    setIsSubmitting(false)
  }

  return (
    <div className="bg-white shadow-md rounded-md p-5">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Send Me a Message</h2>

      {state.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded text-sm mb-4">
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      ) : null}

      <form action={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm text-gray-700 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          {state.errors?.subject && <p className="text-red-500 text-xs mt-1">{state.errors.subject[0]}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          ></textarea>
          {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2 px-4 text-sm rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
        >
          <Send className="w-4 h-4 mr-1" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
