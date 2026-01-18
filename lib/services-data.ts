export interface Service {
  id: string
  slug: string
  title: string
  category: string
  description: string
  heroTitle: string
  heroDescription: string
  heroImage: string
  whatWeOffer: string[]
  whyChooseUs: string[]
  steps: {
    title: string
    description: string
  }[]
  faqItems?: {
    question: string
    answer: string
  }[]
}

export const servicesData: Service[] = [
  // Data Entry Services
  {
    id: "online-data-entry",
    slug: "online-data-entry-services",
    title: "Online Data Entry Services",
    category: "Data Entry Services",
    description:
      "Professional online data entry services to digitize your business information efficiently and accurately.",
    heroTitle: "Reliable Online Data Entry Services",
    heroDescription:
      "Transform your physical documents into organized digital data with our expert online data entry specialists.",
    heroImage: "/images/services/data-entry.jpg",
    whatWeOffer: [
      "High-speed data entry with 99%+ accuracy",
      "Real-time data verification and validation",
      "Secure cloud-based solutions",
      "Support for multiple file formats",
      "Scalable solutions for businesses of all sizes",
    ],
    whyChooseUs: [
      "15+ years of experience in data entry",
      "Certified data professionals",
      "24/7 customer support",
      "Cost-effective pricing models",
      "Quick turnaround time",
    ],
    steps: [
      {
        title: "Document Collection",
        description: "We collect all your documents and organize them systematically.",
      },
      {
        title: "Data Entry",
        description: "Our experts carefully enter data into your desired format.",
      },
      {
        title: "Quality Check",
        description: "We verify every entry for accuracy and completeness.",
      },
      {
        title: "Delivery",
        description: "Deliver processed data in your preferred format.",
      },
    ],
  },
  {
    id: "offline-data-entry",
    slug: "offline-data-entry-services",
    title: "Offline Data Entry Services",
    category: "Data Entry Services",
    description:
      "Expert offline data entry services for printed documents, surveys, and paper records.",
    heroTitle: "Professional Offline Data Entry Solutions",
    heroDescription:
      "Convert your paper records into structured digital databases with precision and speed.",
    heroImage: "/images/services/data-entry.jpg",
    whatWeOffer: [
      "OCR and manual data entry",
      "Handwriting recognition",
      "Document scanning and digitization",
      "Data validation and cleansing",
      "Custom database creation",
    ],
    whyChooseUs: [
      "Expert handling of diverse document types",
      "Advanced OCR technology",
      "Secure data handling",
      "Confidentiality guaranteed",
      "Competitive pricing",
    ],
    steps: [
      {
        title: "Document Assessment",
        description: "Analyze documents and determine optimal entry method.",
      },
      {
        title: "Scanning & Digitization",
        description: "Scan documents and prepare for data entry.",
      },
      {
        title: "Data Entry & Verification",
        description: "Enter data with multi-level quality checks.",
      },
      {
        title: "Final Delivery",
        description: "Deliver data in your required format.",
      },
    ],
  },
  {
    id: "image-data-entry",
    slug: "image-data-entry-services",
    title: "Image Data Entry Services",
    category: "Data Entry Services",
    description: "Extract and organize data from images with high accuracy and speed.",
    heroTitle: "Advanced Image Data Entry Services",
    heroDescription:
      "Leverage cutting-edge technology to extract valuable data from images automatically.",
    heroImage: "/images/services/data-entry.jpg",
    whatWeOffer: [
      "AI-powered image recognition",
      "Text extraction from images",
      "Form data extraction",
      "Invoice and receipt processing",
      "Product information extraction",
    ],
    whyChooseUs: [
      "Latest AI and machine learning technology",
      "99.5%+ accuracy rates",
      "Fast processing speeds",
      "Bulk image processing",
      "Multiple language support",
    ],
    steps: [
      {
        title: "Image Upload",
        description: "Upload images in batches to our secure platform.",
      },
      {
        title: "Processing",
        description: "Our AI automatically extracts and structures data.",
      },
      {
        title: "Manual Verification",
        description: "Our team reviews and verifies extracted information.",
      },
      {
        title: "Export",
        description: "Download data in your preferred format.",
      },
    ],
  },
  {
    id: "data-capture-service",
    slug: "data-capture-service",
    title: "Data Capture Service",
    category: "Data Entry Services",
    description:
      "Comprehensive data capture solutions for forms, surveys, and complex documents.",
    heroTitle: "Enterprise Data Capture Services",
    heroDescription:
      "Automate data collection and processing with our intelligent capture solutions.",
    heroImage: "/images/services/data-entry.jpg",
    whatWeOffer: [
      "Automated form recognition",
      "Multi-page document processing",
      "Field validation",
      "Workflow automation",
      "Real-time data extraction",
    ],
    whyChooseUs: [
      "Full automation of capture process",
      "Reduced manual effort",
      "Quick ROI",
      "Scalable infrastructure",
      "Industry compliance",
    ],
    steps: [
      {
        title: "System Setup",
        description: "Configure capture rules for your documents.",
      },
      {
        title: "Batch Processing",
        description: "Process documents in large batches automatically.",
      },
      {
        title: "Validation",
        description: "Validate captured data against business rules.",
      },
      {
        title: "Integration",
        description: "Integrate data directly into your systems.",
      },
    ],
  },

  // E-commerce Platforms
  {
    id: "product-upload-listing",
    slug: "product-upload-listing-services",
    title: "Product Upload Listing Services",
    category: "e commerce platforms",
    description:
      "Professional product upload and listing services for all major e-commerce platforms.",
    heroTitle: "Expert Product Upload & Listing Services",
    heroDescription:
      "Get your products live on e-commerce platforms faster with our professional listing services.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Multi-platform product uploads",
      "Bulk inventory management",
      "Product optimization",
      "Image and description enhancement",
      "SKU and variant management",
    ],
    whyChooseUs: [
      "Certified by major platforms",
      "Fast turnaround time",
      "Error-free uploads",
      "Support for thousands of products",
      "Real-time tracking",
    ],
    steps: [
      {
        title: "Product Data Collection",
        description: "Gather all product information and specifications.",
      },
      {
        title: "Data Formatting",
        description: "Organize data according to platform requirements.",
      },
      {
        title: "Upload & Testing",
        description: "Upload products and verify listing accuracy.",
      },
      {
        title: "Go Live",
        description: "Products go live and start selling immediately.",
      },
    ],
  },
  {
    id: "ecommerce-product-listing",
    slug: "ecommerce-product-listing-services",
    title: "E-commerce Product Listing Services",
    category: "e commerce platforms",
    description: "Comprehensive product listing optimization for maximum conversions.",
    heroTitle: "High-Converting Product Listings",
    heroDescription:
      "Create compelling product listings that drive sales on your e-commerce store.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "SEO-optimized descriptions",
      "Professional product photography",
      "Keyword research and placement",
      "A/B testing for listings",
      "Conversion rate optimization",
    ],
    whyChooseUs: [
      "Proven conversion increase",
      "SEO expertise",
      "Data-driven approach",
      "Professional copywriting",
      "Continuous optimization",
    ],
    steps: [
      {
        title: "Audit",
        description: "Analyze current listings for improvement opportunities.",
      },
      {
        title: "Optimization",
        description: "Enhance titles, descriptions, and images.",
      },
      {
        title: "Implementation",
        description: "Deploy optimized listings to your store.",
      },
      {
        title: "Monitoring",
        description: "Track performance and make continuous improvements.",
      },
    ],
  },
  {
    id: "catalog-management",
    slug: "catalog-management-services",
    title: "Catalog Management Services",
    category: "e commerce platforms",
    description: "Complete catalog management and maintenance for e-commerce businesses.",
    heroTitle: "Professional Catalog Management",
    heroDescription:
      "Keep your product catalog organized, updated, and optimized for maximum performance.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Ongoing catalog updates",
      "Inventory synchronization",
      "Price management",
      "Category organization",
      "Duplicate product removal",
    ],
    whyChooseUs: [
      "Dedicated account managers",
      "Proactive monitoring",
      "Regular reporting",
      "Multi-platform support",
      "24/7 support",
    ],
    steps: [
      {
        title: "Catalog Audit",
        description: "Review and analyze your complete catalog.",
      },
      {
        title: "Organization",
        description: "Reorganize products into optimal categories.",
      },
      {
        title: "Maintenance Plan",
        description: "Set up ongoing maintenance schedule.",
      },
      {
        title: "Monitoring",
        description: "Continuously monitor and update catalog.",
      },
    ],
  },
  {
    id: "catalog-processing",
    slug: "catalog-processing-services",
    title: "Catalog Processing Services",
    category: "e commerce platforms",
    description:
      "Convert and process product catalogs for various e-commerce platforms.",
    heroTitle: "Catalog Data Processing Services",
    heroDescription:
      "Transform your product catalogs into platform-ready formats efficiently.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Format conversion",
      "Data validation",
      "Batch processing",
      "Error correction",
      "Import/export management",
    ],
    whyChooseUs: [
      "Quick turnaround",
      "Error-free processing",
      "Multiple format support",
      "Competitive pricing",
      "Secure data handling",
    ],
    steps: [
      {
        title: "Format Analysis",
        description: "Understand your current catalog format.",
      },
      {
        title: "Data Extraction",
        description: "Extract data from source files.",
      },
      {
        title: "Processing",
        description: "Process and format for target platform.",
      },
      {
        title: "Delivery",
        description: "Deliver processed catalog ready for upload.",
      },
    ],
  },
  {
    id: "magento-product-upload",
    slug: "magento-product-upload-services",
    title: "Magento Product Upload Services",
    category: "e commerce platforms",
    description: "Expert Magento product upload and catalog management services.",
    heroTitle: "Professional Magento Product Upload",
    heroDescription:
      "Get your products loaded into Magento quickly and correctly with our expert service.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Bulk product imports",
      "Attribute mapping",
      "Image uploading",
      "Category assignment",
      "Magento optimization",
    ],
    whyChooseUs: [
      "Magento certified experts",
      "Technical excellence",
      "Bulk operation expertise",
      "Error handling",
      "Performance optimization",
    ],
    steps: [
      {
        title: "Setup",
        description: "Configure Magento for product upload.",
      },
      {
        title: "Data Preparation",
        description: "Prepare product data in CSV format.",
      },
      {
        title: "Import",
        description: "Execute bulk import with validation.",
      },
      {
        title: "Verification",
        description: "Verify all products imported correctly.",
      },
    ],
  },
  {
    id: "shopify-product-listing",
    slug: "shopify-product-listing",
    title: "Shopify Product Listing",
    category: "e commerce platforms",
    description: "Professional Shopify product listing and store optimization services.",
    heroTitle: "Shopify Product Listing Services",
    heroDescription:
      "Launch your Shopify store with perfectly optimized product listings.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Complete product uploads",
      "Theme customization",
      "SEO optimization",
      "Payment gateway setup",
      "Store optimization",
    ],
    whyChooseUs: [
      "Shopify expert partners",
      "Store optimization expertise",
      "Conversion focus",
      "Ongoing support",
      "Proven results",
    ],
    steps: [
      {
        title: "Store Setup",
        description: "Set up your Shopify store structure.",
      },
      {
        title: "Product Upload",
        description: "Upload and organize all products.",
      },
      {
        title: "Optimization",
        description: "Optimize for conversions and SEO.",
      },
      {
        title: "Launch",
        description: "Go live with full support.",
      },
    ],
  },
  {
    id: "woocommerce-product-upload",
    slug: "woocommerce-product-upload",
    title: "WooCommerce Product Upload",
    category: "e commerce platforms",
    description: "WooCommerce product upload and store optimization services.",
    heroTitle: "WooCommerce Product Upload Services",
    heroDescription:
      "Get your WordPress WooCommerce store populated with products professionally.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Bulk product imports",
      "Plugin configuration",
      "Product categorization",
      "Tax setup",
      "Inventory management",
    ],
    whyChooseUs: [
      "WordPress expertise",
      "WooCommerce specialists",
      "Plugin optimization",
      "Technical support",
      "Performance tuning",
    ],
    steps: [
      {
        title: "Store Audit",
        description: "Analyze your WooCommerce setup.",
      },
      {
        title: "Product Import",
        description: "Import products via CSV or direct upload.",
      },
      {
        title: "Configuration",
        description: "Configure all WooCommerce settings.",
      },
      {
        title: "Testing & Launch",
        description: "Test thoroughly and launch store.",
      },
    ],
  },
  {
    id: "bigcommerce-product-listing",
    slug: "bigcommerce-product-listing",
    title: "BigCommerce Product Listing",
    category: "e commerce platforms",
    description: "BigCommerce product listing and enterprise store services.",
    heroTitle: "BigCommerce Product Listing Services",
    heroDescription:
      "Enterprise-level product listing services for your BigCommerce store.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Large-scale product uploads",
      "Advanced inventory sync",
      "Multi-channel integration",
      "Performance optimization",
      "Enterprise support",
    ],
    whyChooseUs: [
      "BigCommerce partners",
      "Enterprise expertise",
      "Scalability",
      "Technical excellence",
      "24/7 support",
    ],
    steps: [
      {
        title: "Planning",
        description: "Plan BigCommerce implementation.",
      },
      {
        title: "Integration",
        description: "Set up integration with your systems.",
      },
      {
        title: "Product Load",
        description: "Load all products with validation.",
      },
      {
        title: "Optimization",
        description: "Optimize for performance and conversions.",
      },
    ],
  },
  {
    id: "opencart-product-listing",
    slug: "opencart-product-listing",
    title: "OpenCart Product Listing",
    category: "e commerce platforms",
    description: "OpenCart product listing and store management services.",
    heroTitle: "OpenCart Product Listing Services",
    heroDescription:
      "Professional product listing and store optimization for OpenCart.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Bulk uploads",
      "Module installation",
      "SEO configuration",
      "Payment integration",
      "Store security setup",
    ],
    whyChooseUs: [
      "OpenCart expertise",
      "Quick implementation",
      "Custom solutions",
      "Ongoing support",
      "Competitive pricing",
    ],
    steps: [
      {
        title: "Setup",
        description: "Configure OpenCart store.",
      },
      {
        title: "Upload",
        description: "Upload products in bulk.",
      },
      {
        title: "Customization",
        description: "Customize store appearance and functionality.",
      },
      {
        title: "Launch",
        description: "Launch and provide training.",
      },
    ],
  },
  {
    id: "volusion-product-listing",
    slug: "volusion-product-listing",
    title: "Volusion Product Listing",
    category: "e commerce platforms",
    description: "Volusion e-commerce platform product listing services.",
    heroTitle: "Volusion Product Listing Services",
    heroDescription:
      "Complete product listing solution for your Volusion store.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Product database setup",
      "Image management",
      "Inventory automation",
      "Order management setup",
      "Customer support",
    ],
    whyChooseUs: [
      "Volusion certified",
      "Platform expertise",
      "End-to-end support",
      "Best practices",
      "Proven success",
    ],
    steps: [
      {
        title: "Account Setup",
        description: "Set up your Volusion account.",
      },
      {
        title: "Import Products",
        description: "Import all products to Volusion.",
      },
      {
        title: "Optimization",
        description: "Optimize listings for better sales.",
      },
      {
        title: "Support",
        description: "Provide ongoing store support.",
      },
    ],
  },
  {
    id: "3dcart-product-listing",
    slug: "3dcart-product-listing",
    title: "3DCart Product Listing",
    category: "e commerce platforms",
    description: "3DCart e-commerce platform product listing services.",
    heroTitle: "3DCart Product Listing Services",
    heroDescription:
      "Professional product listing services for your 3DCart store.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Bulk product uploads",
      "Template customization",
      "SEO setup",
      "Integration setup",
      "Conversion optimization",
    ],
    whyChooseUs: [
      "3DCart specialists",
      "Quick setup",
      "Ongoing optimization",
      "Technical support",
      "Affordable pricing",
    ],
    steps: [
      {
        title: "Store Configuration",
        description: "Configure 3DCart store settings.",
      },
      {
        title: "Product Upload",
        description: "Upload products in bulk.",
      },
      {
        title: "Store Customization",
        description: "Customize store appearance.",
      },
      {
        title: "Launch",
        description: "Launch store with full support.",
      },
    ],
  },

  // Marketplaces
  {
    id: "amazon-marketplace",
    slug: "amazon-marketplace",
    title: "Amazon Marketplace",
    category: "Marketplaces",
    description: "Complete Amazon marketplace management and optimization services.",
    heroTitle: "Amazon Marketplace Management",
    heroDescription:
      "Maximize your sales on Amazon with professional marketplace management.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Seller account setup",
      "Product listing optimization",
      "Inventory management",
      "Order fulfillment support",
      "Performance analytics",
    ],
    whyChooseUs: [
      "Amazon certified sellers",
      "Years of experience",
      "Proven sales increase",
      "Dedicated support",
      "Multi-seller expertise",
    ],
    steps: [
      {
        title: "Account Setup",
        description: "Create and verify your Amazon seller account.",
      },
      {
        title: "Catalog Upload",
        description: "Upload your complete product catalog.",
      },
      {
        title: "Optimization",
        description: "Optimize listings for better visibility.",
      },
      {
        title: "Support",
        description: "Ongoing support and performance management.",
      },
    ],
  },
  {
    id: "ebay-marketplace",
    slug: "ebay-marketplace",
    title: "eBay Marketplace",
    category: "Marketplaces",
    description: "eBay seller services and marketplace optimization.",
    heroTitle: "eBay Seller Services",
    heroDescription:
      "Grow your eBay business with professional marketplace management.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Store setup and customization",
      "Bulk product uploads",
      "Auction management",
      "Feedback management",
      "Marketing support",
    ],
    whyChooseUs: [
      "eBay PowerSeller experience",
      "Auction expertise",
      "Community trust",
      "Professional support",
      "Sales growth focus",
    ],
    steps: [
      {
        title: "Store Setup",
        description: "Set up your eBay store.",
      },
      {
        title: "Product Upload",
        description: "Upload products and create listings.",
      },
      {
        title: "Management",
        description: "Daily store and inventory management.",
      },
      {
        title: "Growth",
        description: "Scale your business on eBay.",
      },
    ],
  },
  {
    id: "walmart-marketplace",
    slug: "walmart-marketplace",
    title: "Walmart Marketplace",
    category: "Marketplaces",
    description: "Walmart seller services and marketplace integration.",
    heroTitle: "Walmart Seller Services",
    heroDescription:
      "Expand your reach with professional Walmart marketplace management.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Seller onboarding",
      "Product catalog upload",
      "Competitive pricing",
      "Order management",
      "Performance analytics",
    ],
    whyChooseUs: [
      "Walmart certified partners",
      "Platform expertise",
      "Quick approval",
      "Sales optimization",
      "Ongoing support",
    ],
    steps: [
      {
        title: "Application",
        description: "Apply for Walmart seller program.",
      },
      {
        title: "Approval",
        description: "Get approved and set up seller account.",
      },
      {
        title: "Upload",
        description: "Upload product catalog.",
      },
      {
        title: "Manage",
        description: "Ongoing management and optimization.",
      },
    ],
  },
  {
    id: "etsy-marketplace",
    slug: "etsy-marketplace",
    title: "Etsy Marketplace",
    category: "Marketplaces",
    description: "Etsy store setup and optimization for handmade and vintage sellers.",
    heroTitle: "Etsy Store Services",
    heroDescription:
      "Create a successful Etsy shop with professional store setup and optimization.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Shop creation and branding",
      "Product photography",
      "SEO optimization",
      "Marketing support",
      "Customer service",
    ],
    whyChooseUs: [
      "Etsy shop success experts",
      "Creative design background",
      "Community building",
      "Sales growth strategies",
      "Seller support",
    ],
    steps: [
      {
        title: "Shop Setup",
        description: "Create and brand your Etsy shop.",
      },
      {
        title: "Product Listing",
        description: "List your products with SEO optimization.",
      },
      {
        title: "Marketing",
        description: "Market your shop and listings.",
      },
      {
        title: "Growth",
        description: "Scale your Etsy business.",
      },
    ],
  },
  {
    id: "souq-marketplace",
    slug: "souq-marketplace",
    title: "Souq Marketplace",
    category: "Marketplaces",
    description: "Souq (Amazon Middle East) seller services and marketplace management.",
    heroTitle: "Souq Marketplace Services",
    heroDescription:
      "Enter the Middle East e-commerce market with Souq marketplace management.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Seller account setup",
      "Arabic content optimization",
      "Regional marketing",
      "Localization support",
      "Multicurrency support",
    ],
    whyChooseUs: [
      "Middle East market expertise",
      "Localization skills",
      "Seller network",
      "Regional support",
      "Growth strategies",
    ],
    steps: [
      {
        title: "Registration",
        description: "Register as Souq seller.",
      },
      {
        title: "Localization",
        description: "Localize products and content.",
      },
      {
        title: "Upload",
        description: "Upload product catalog.",
      },
      {
        title: "Launch",
        description: "Launch and manage store.",
      },
    ],
  },

  // Amazon Management
  {
    id: "amazon-listing-creation",
    slug: "amazon-listing-creation-services",
    title: "Amazon Listing Creation Services",
    category: "Amazon Management",
    description: "Professional Amazon product listing creation and optimization.",
    heroTitle: "Expert Amazon Listing Creation",
    heroDescription:
      "Create high-converting Amazon product listings that rank and sell.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Product research and validation",
      "Keyword research and optimization",
      "Compelling copy writing",
      "Professional product photography",
      "A/B testing setup",
    ],
    whyChooseUs: [
      "Amazon best practices",
      "SEO expertise",
      "Conversion optimization",
      "Data-driven approach",
      "Proven results",
    ],
    steps: [
      {
        title: "Research",
        description: "Research product and market demand.",
      },
      {
        title: "Keyword Analysis",
        description: "Find high-converting keywords.",
      },
      {
        title: "Listing Creation",
        description: "Create optimized product listing.",
      },
      {
        title: "Testing",
        description: "Test and optimize for conversions.",
      },
    ],
  },
  {
    id: "amazon-product-optimization",
    slug: "amazon-product-listing-optimization-services",
    title: "Amazon Product Listing Optimization Services",
    category: "Amazon Management",
    description:
      "Optimize your existing Amazon listings for better visibility and sales.",
    heroTitle: "Amazon Listing Optimization",
    heroDescription:
      "Improve your Amazon product visibility and increase sales with expert optimization.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Title and bullet point optimization",
      "Description enhancement",
      "Keyword density optimization",
      "Image quality improvement",
      "Backend keyword optimization",
    ],
    whyChooseUs: [
      "A9 algorithm expertise",
      "Ranking improvement focus",
      "Conversion increase",
      "Continuous optimization",
      "Performance tracking",
    ],
    steps: [
      {
        title: "Audit",
        description: "Audit current listings for improvements.",
      },
      {
        title: "Analysis",
        description: "Analyze competitor listings.",
      },
      {
        title: "Optimization",
        description: "Implement optimization strategies.",
      },
      {
        title: "Monitoring",
        description: "Monitor rankings and conversions.",
      },
    ],
  },
  {
    id: "amazon-seo",
    slug: "amazon-seo-services",
    title: "Amazon SEO Services",
    category: "Amazon Management",
    description: "Specialized Amazon SEO services for better search rankings.",
    heroTitle: "Amazon SEO Services",
    heroDescription:
      "Get your products ranking #1 on Amazon search results with expert SEO.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Keyword research for Amazon",
      "Ranking optimization",
      "Competition analysis",
      "Backend keyword optimization",
      "Review management",
    ],
    whyChooseUs: [
      "Amazon search algorithm experts",
      "Proven ranking results",
      "Data-driven strategies",
      "Continuous monitoring",
      "Sales increase focus",
    ],
    steps: [
      {
        title: "Baseline Assessment",
        description: "Assess current rankings and visibility.",
      },
      {
        title: "Strategy Development",
        description: "Develop SEO strategy.",
      },
      {
        title: "Implementation",
        description: "Implement SEO optimizations.",
      },
      {
        title: "Tracking",
        description: "Track rankings and adjust strategy.",
      },
    ],
  },
  {
    id: "amazon-listing",
    slug: "amazon-listing-services",
    title: "Amazon Listing Services",
    category: "Amazon Management",
    description: "Complete Amazon product listing management and support.",
    heroTitle: "Amazon Listing Management",
    heroDescription:
      "Professional management of your Amazon product listings for consistent growth.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Daily listing management",
      "Price optimization",
      "Inventory management",
      "Review monitoring",
      "Issue resolution",
    ],
    whyChooseUs: [
      "Proactive management",
      "Problem resolution",
      "Growth focus",
      "Dedicated support",
      "Performance reporting",
    ],
    steps: [
      {
        title: "Account Audit",
        description: "Complete audit of your account.",
      },
      {
        title: "Optimization Plan",
        description: "Create optimization plan.",
      },
      {
        title: "Execution",
        description: "Execute optimizations and manage daily.",
      },
      {
        title: "Reporting",
        description: "Provide regular performance reports.",
      },
    ],
  },
  {
    id: "amazon-specialists",
    slug: "amazon-specialists",
    title: "Amazon Specialists",
    category: "Amazon Management",
    description:
      "Expert Amazon specialists for complex account and business issues.",
    heroTitle: "Amazon Account Specialists",
    heroDescription:
      "Access to expert Amazon specialists for account health and growth strategy.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Account health monitoring",
      "Suspension recovery",
      "Policy compliance",
      "Business strategy",
      "Advanced optimization",
    ],
    whyChooseUs: [
      "Amazon account experts",
      "Crisis management experience",
      "Strategic planning",
      "Relationship building",
      "Long-term growth",
    ],
    steps: [
      {
        title: "Consultation",
        description: "In-depth consultation on your needs.",
      },
      {
        title: "Strategy",
        description: "Develop comprehensive strategy.",
      },
      {
        title: "Implementation",
        description: "Implement strategic recommendations.",
      },
      {
        title: "Support",
        description: "Ongoing specialist support.",
      },
    ],
  },
  {
    id: "amazon-ppc",
    slug: "amazon-ppc-agency",
    title: "Amazon PPC Agency",
    category: "Amazon Management",
    description: "Professional Amazon PPC management and advertising services.",
    heroTitle: "Amazon PPC Management",
    heroDescription:
      "Maximize your advertising ROI with expert Amazon PPC management.",
    heroImage: "/images/services/amazon.jpg",
    whatWeOffer: [
      "Campaign setup and management",
      "Keyword research",
      "Bid optimization",
      "Ad copy optimization",
      "Performance analytics",
    ],
    whyChooseUs: [
      "PPC specialists",
      "ROI focus",
      "Data-driven optimization",
      "Continuous monitoring",
      "Transparent reporting",
    ],
    steps: [
      {
        title: "Strategy",
        description: "Develop PPC strategy.",
      },
      {
        title: "Campaign Setup",
        description: "Set up campaigns with best practices.",
      },
      {
        title: "Optimization",
        description: "Continuously optimize campaigns.",
      },
      {
        title: "Reporting",
        description: "Regular reporting and insights.",
      },
    ],
  },

  // Image Editing
  {
    id: "image-retouching",
    slug: "image-retouching",
    title: "Image Retouching",
    category: "Image Editing",
    description: "Professional image retouching services for product and portrait photos.",
    heroTitle: "Expert Image Retouching Services",
    heroDescription:
      "Enhance your product images with professional retouching for maximum appeal.",
    heroImage: "/images/services/image-editing.jpg",
    whatWeOffer: [
      "Color correction",
      "Skin retouching",
      "Blemish removal",
      "Shadow and highlight adjustment",
      "Professional sharpening",
    ],
    whyChooseUs: [
      "Professional photographers on staff",
      "Adobe expertise",
      "Quick turnaround",
      "High quality standards",
      "Bulk processing available",
    ],
    steps: [
      {
        title: "Upload",
        description: "Upload your images to our secure platform.",
      },
      {
        title: "Analysis",
        description: "Our experts analyze and plan retouching.",
      },
      {
        title: "Editing",
        description: "Professional retouching applied.",
      },
      {
        title: "Delivery",
        description: "Download your retouched images.",
      },
    ],
  },
  {
    id: "image-restoration",
    slug: "image-restoration",
    title: "Image Restoration",
    category: "Image Editing",
    description: "Restore old, damaged, or faded images to their original beauty.",
    heroTitle: "Professional Image Restoration",
    heroDescription:
      "Bring old memories back to life with expert image restoration services.",
    heroImage: "/images/services/image-editing.jpg",
    whatWeOffer: [
      "Damage repair",
      "Color restoration",
      "Crack removal",
      "Fading correction",
      "Dust and scratch removal",
    ],
    whyChooseUs: [
      "Expert restoration specialists",
      "Advanced techniques",
      "High resolution results",
      "Personal touch",
      "Archival quality",
    ],
    steps: [
      {
        title: "Assessment",
        description: "Assess damage and restoration needs.",
      },
      {
        title: "Restoration",
        description: "Apply restoration techniques.",
      },
      {
        title: "Enhancement",
        description: "Enhance colors and details.",
      },
      {
        title: "Delivery",
        description: "Deliver restored high-quality image.",
      },
    ],
  },
  {
    id: "image-manipulation",
    slug: "image-manipulation",
    title: "Image Manipulation",
    category: "Image Editing",
    description:
      "Creative image manipulation and compositing for marketing and creative projects.",
    heroTitle: "Creative Image Manipulation",
    heroDescription:
      "Bring your creative vision to life with professional image manipulation.",
    heroImage: "/images/services/image-editing.jpg",
    whatWeOffer: [
      "Photo compositing",
      "Background replacement",
      "Object removal",
      "Creative blending",
      "Special effects",
    ],
    whyChooseUs: [
      "Creative designers",
      "Adobe mastery",
      "Unlimited revisions",
      "Quick turnaround",
      "Custom solutions",
    ],
    steps: [
      {
        title: "Concept",
        description: "Discuss your creative concept.",
      },
      {
        title: "Creation",
        description: "Create manipulated image.",
      },
      {
        title: "Revision",
        description: "Refine until perfect.",
      },
      {
        title: "Delivery",
        description: "Deliver final creative image.",
      },
    ],
  },
  {
    id: "watermark-removal",
    slug: "watermark-removal",
    title: "Watermark Removal",
    category: "Image Editing",
    description: "Professional watermark and logo removal from images.",
    heroTitle: "Watermark & Logo Removal",
    heroDescription:
      "Remove watermarks and logos cleanly using advanced content-aware techniques.",
    heroImage: "/images/services/image-editing.jpg",
    whatWeOffer: [
      "Content-aware removal",
      "Clean background reconstruction",
      "Multiple watermark removal",
      "Quality preservation",
      "Batch processing",
    ],
    whyChooseUs: [
      "Advanced techniques",
      "Invisible removal",
      "High quality results",
      "Fast service",
      "Affordable pricing",
    ],
    steps: [
      {
        title: "Upload",
        description: "Upload image with watermark.",
      },
      {
        title: "Analysis",
        description: "Analyze watermark and background.",
      },
      {
        title: "Removal",
        description: "Remove watermark seamlessly.",
      },
      {
        title: "Delivery",
        description: "Deliver clean image.",
      },
    ],
  },
  {
    id: "add-watermark",
    slug: "add-watermark",
    title: "Add Watermark",
    category: "Image Editing",
    description: "Add professional watermarks and logos to your images for protection.",
    heroTitle: "Professional Watermark Services",
    heroDescription:
      "Protect your images with professional watermark or logo placement.",
    heroImage: "/images/services/image-editing.jpg",
    whatWeOffer: [
      "Custom watermark design",
      "Batch watermarking",
      "Placement optimization",
      "Transparency adjustment",
      "Multiple format support",
    ],
    whyChooseUs: [
      "Professional design",
      "Mass processing",
      "Quick turnaround",
      "Customizable options",
      "Affordable service",
    ],
    steps: [
      {
        title: "Design",
        description: "Create custom watermark.",
      },
      {
        title: "Upload",
        description: "Upload images for watermarking.",
      },
      {
        title: "Processing",
        description: "Apply watermarks in batch.",
      },
      {
        title: "Delivery",
        description: "Download watermarked images.",
      },
    ],
  },

  // Virtual Assistant for eCommerce
  {
    id: "chat-support",
    slug: "chat-support",
    title: "Chat Support",
    category: "Virtual Assistant For eCommerce Store",
    description: "24/7 chat support for your e-commerce store customers.",
    heroTitle: "Professional Chat Support Services",
    heroDescription:
      "Provide instant customer support with our professional chat support team.",
    heroImage: "/images/services/support.jpg",
    whatWeOffer: [
      "24/7 chat coverage",
      "Multi-language support",
      "Product assistance",
      "Order tracking",
      "Quick response times",
    ],
    whyChooseUs: [
      "Trained support specialists",
      "Multilingual team",
      "Quick response guarantee",
      "Affordable rates",
      "High customer satisfaction",
    ],
    steps: [
      {
        title: "Setup",
        description: "Integrate chat with your store.",
      },
      {
        title: "Training",
        description: "Train support team on products.",
      },
      {
        title: "Launch",
        description: "Go live with chat support.",
      },
      {
        title: "Support",
        description: "Ongoing 24/7 support management.",
      },
    ],
  },
  {
    id: "email-support",
    slug: "email-support",
    title: "Email Support",
    category: "Virtual Assistant For eCommerce Store",
    description: "Professional email support for your e-commerce customers.",
    heroTitle: "Professional Email Support Services",
    heroDescription:
      "Deliver professional email support with quick response times and issue resolution.",
    heroImage: "/images/services/support.jpg",
    whatWeOffer: [
      "Customer inquiry response",
      "Order issue resolution",
      "Product information",
      "Return processing",
      "Complaint handling",
    ],
    whyChooseUs: [
      "Professional communication",
      "Quick turnaround",
      "Issue resolution focus",
      "Customer satisfaction",
      "Detailed documentation",
    ],
    steps: [
      {
        title: "Configuration",
        description: "Set up email support system.",
      },
      {
        title: "Training",
        description: "Train support team.",
      },
      {
        title: "Monitoring",
        description: "Monitor and manage emails.",
      },
      {
        title: "Reporting",
        description: "Provide monthly support reports.",
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug)
}

export function getServicesByCategory(category: string): Service[] {
  return servicesData.filter((service) => service.category === category)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(servicesData.map((service) => service.category)))
}
