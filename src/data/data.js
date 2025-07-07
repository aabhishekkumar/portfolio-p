const testimonials = [
    {
      quote: "The best food delivery experience I've ever had.",
      name: "Riya Sharma",
      role: "Regular Customer"
    },
    {
      quote: "Consistently delicious meals delivered right on time.",
      name: "Amit Patel",
      role: "Food Blogger"
    },
    {
      quote: "Their vegetarian options are absolutely amazing!",
      name: "Priya Desai",
      role: "Health Enthusiast"
    }
  ]

  const faqs = [
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, over 50% of our menu is vegetarian with fresh, locally sourced ingredients."
    },
    {
      question: "How do I track my order?",
      answer: "You'll receive a live tracking link via SMS and email after checkout."
    },
    {
      question: "What are your delivery hours?",
      answer: "We deliver from 11am to 10pm daily, with extended hours on weekends."
    }
  ]

  const menuItems = [
    {
      name: "Spicy Ramen",
      description: "A bold, flavorful classic with house-made broth and fresh noodles.",
      price: "$12.99"
    },
    {
      name: "Grilled Paneer Wrap",
      description: "Smoky, savory paneer with fresh veggies in a whole wheat tortilla.",
      price: "$9.99"
    },
    {
      name: "Mango Lassi",
      description: "Sweet, creamy, and refreshing traditional yogurt drink.",
      price: "$4.99"
    }
  ]

  const features = [
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Fast Delivery",
      description: "Hot meals at your door in under 30 minutes."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Expert Chefs",
      description: "Crafted by culinary professionals with years of experience."
    },
    {
      icon: <Check className="h-8 w-8 text-primary" />,
      title: "Fresh Ingredients",
      description: "Locally sourced, always fresh and seasonal."
    }
  ]

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }