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
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Me a Message</h2>

      {state.success ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      ) : null}

      <form action={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-lg text-gray-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="block text-lg text-gray-700 mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          {state.errors?.subject && <p className="text-red-500 text-sm mt-1">{state.errors.subject[0]}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-lg text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          ></textarea>
          {state.errors?.message && <p className="text-red-500 text-sm mt-1">{state.errors.message[0]}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
        >
          <Send className="w-5 h-5 mr-2" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  )
}
