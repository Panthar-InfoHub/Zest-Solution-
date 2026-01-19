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
        description: "Ongoing email support.",
      },
    ],
  },
  // Content Writing Services
  {
    id: "article-writing-rewriting",
    slug: "article-writing-rewriting",
    title: "Article Writing & Rewriting",
    category: "Content Writing Services",
    description: "Professional article writing and rewriting services for blogs, websites, and publications.",
    heroTitle: "Expert Article Writing & Rewriting Services",
    heroDescription: "Create compelling, SEO-optimized articles that engage your audience and drive traffic.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Original article writing",
      "SEO-optimized content",
      "Professional editing",
      "Quick turnaround",
      "Plagiarism-free content",
    ],
    whyChooseUs: [
      "Experienced writers",
      "Quality guaranteed",
      "Fast delivery",
      "Affordable rates",
      "Unlimited revisions",
    ],
    steps: [
      {
        title: "Research",
        description: "In-depth topic research and outline creation.",
      },
      {
        title: "Writing",
        description: "Professional article writing with SEO optimization.",
      },
      {
        title: "Editing",
        description: "Professional editing and proofreading.",
      },
      {
        title: "Delivery",
        description: "Final review and content delivery.",
      },
    ],
  },
  {
    id: "blog-writing-services",
    slug: "blog-writing-services",
    title: "Blog Writing Services",
    category: "Content Writing Services",
    description: "Engaging blog content that drives traffic and builds audience loyalty.",
    heroTitle: "Professional Blog Writing Services",
    heroDescription: "Consistent, high-quality blog content that keeps your audience engaged.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Regular blog posts",
      "Topic research",
      "SEO optimization",
      "Image sourcing",
      "Content calendar",
    ],
    whyChooseUs: [
      "Professional writers",
      "On-time delivery",
      "SEO-friendly content",
      "Flexible topics",
      "Competitive pricing",
    ],
    steps: [
      {
        title: "Planning",
        description: "Create content calendar and strategy.",
      },
      {
        title: "Writing",
        description: "Write engaging blog posts.",
      },
      {
        title: "Optimization",
        description: "Optimize for search engines.",
      },
      {
        title: "Publishing",
        description: "Publish and promote content.",
      },
    ],
  },
  {
    id: "web-content-writing",
    slug: "web-content-writing",
    title: "Web Content Writing",
    category: "Content Writing Services",
    description: "Persuasive web copy that converts visitors into customers.",
    heroTitle: "High-Converting Web Content Writing",
    heroDescription: "Compelling website copy designed to convert and engage your target audience.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Homepage copy",
      "Product descriptions",
      "Service pages",
      "CTA optimization",
      "Conversion focus",
    ],
    whyChooseUs: [
      "Conversion-focused writing",
      "Clear messaging",
      "Brand voice alignment",
      "Professional quality",
      "Quick revisions",
    ],
    steps: [
      {
        title: "Discovery",
        description: "Understand your business and audience.",
      },
      {
        title: "Strategy",
        description: "Create content strategy.",
      },
      {
        title: "Writing",
        description: "Write compelling web copy.",
      },
      {
        title: "Optimization",
        description: "Optimize for conversions.",
      },
    ],
  },
  {
    id: "press-release-writing",
    slug: "press-release-writing",
    title: "Press Release Writing",
    category: "Content Writing Services",
    description: "Professional press releases that get media attention.",
    heroTitle: "Professional Press Release Writing",
    heroDescription: "Newsworthy press releases that attract media coverage and public attention.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Newsworthy content",
      "Media distribution",
      "Professional format",
      "Quick writing",
      "Multiple revisions",
    ],
    whyChooseUs: [
      "Media expertise",
      "Professional writing",
      "Distribution included",
      "Fast turnaround",
      "Proven results",
    ],
    steps: [
      {
        title: "Information",
        description: "Gather news and details.",
      },
      {
        title: "Writing",
        description: "Write professional press release.",
      },
      {
        title: "Review",
        description: "Review and revise content.",
      },
      {
        title: "Distribution",
        description: "Distribute to media outlets.",
      },
    ],
  },
  {
    id: "company-profile-writing",
    slug: "company-profile-writing",
    title: "Company Profile Writing",
    category: "Content Writing Services",
    description: "Comprehensive company profiles that showcase your business.",
    heroTitle: "Professional Company Profile Writing",
    heroDescription: "Engaging company profiles that highlight your achievements and values.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Company history",
      "Mission statement",
      "Team highlights",
      "Achievements",
      "Professional format",
    ],
    whyChooseUs: [
      "Professional writers",
      "Compelling storytelling",
      "Brand representation",
      "Customized content",
      "Quick turnaround",
    ],
    steps: [
      {
        title: "Interview",
        description: "Conduct company interviews.",
      },
      {
        title: "Research",
        description: "Research company background.",
      },
      {
        title: "Writing",
        description: "Write professional profile.",
      },
      {
        title: "Finalization",
        description: "Final review and delivery.",
      },
    ],
  },
  {
    id: "travel-writing",
    slug: "travel-writing",
    title: "Travel Writing",
    category: "Content Writing Services",
    description: "Engaging travel content for blogs, magazines, and websites.",
    heroTitle: "Professional Travel Writing Services",
    heroDescription: "Captivating travel stories and guides that inspire your readers.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Destination guides",
      "Travel stories",
      "Travel tips",
      "SEO optimization",
      "Engaging narratives",
    ],
    whyChooseUs: [
      "Experienced writers",
      "Engaging content",
      "SEO-friendly",
      "Fast delivery",
      "Flexible topics",
    ],
    steps: [
      {
        title: "Research",
        description: "Research destinations and topics.",
      },
      {
        title: "Writing",
        description: "Write engaging travel content.",
      },
      {
        title: "Optimization",
        description: "Optimize for search engines.",
      },
      {
        title: "Delivery",
        description: "Final delivery and support.",
      },
    ],
  },
  {
    id: "review-writing",
    slug: "review-writing",
    title: "Review Writing",
    category: "Content Writing Services",
    description: "Professional product and service reviews.",
    heroTitle: "Professional Review Writing Services",
    heroDescription: "Honest, detailed reviews that help customers make informed decisions.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Product reviews",
      "Service reviews",
      "Professional writing",
      "Unbiased opinion",
      "Quick delivery",
    ],
    whyChooseUs: [
      "Professional writers",
      "Honest reviews",
      "Quick turnaround",
      "SEO-friendly",
      "Affordable rates",
    ],
    steps: [
      {
        title: "Testing",
        description: "Product/service testing.",
      },
      {
        title: "Analysis",
        description: "Analyze features and benefits.",
      },
      {
        title: "Writing",
        description: "Write comprehensive review.",
      },
      {
        title: "Delivery",
        description: "Final delivery and feedback.",
      },
    ],
  },
  // Social Media Services
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    category: "Social Media",
    description: "Comprehensive social media marketing strategies and management.",
    heroTitle: "Expert Social Media Marketing Services",
    heroDescription: "Build your brand presence and engage your audience across all social platforms.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Social media strategy",
      "Content creation",
      "Community management",
      "Analytics reporting",
      "Campaign management",
    ],
    whyChooseUs: [
      "Proven strategies",
      "Expert team",
      "Results-driven",
      "Transparent reporting",
      "24/7 support",
    ],
    steps: [
      {
        title: "Strategy",
        description: "Create social media strategy.",
      },
      {
        title: "Content",
        description: "Create engaging content.",
      },
      {
        title: "Engagement",
        description: "Manage community engagement.",
      },
      {
        title: "Analysis",
        description: "Analyze and report results.",
      },
    ],
  },
  {
    id: "smo-services",
    slug: "smo-services",
    title: "SMO Services",
    category: "Social Media",
    description: "Social Media Optimization services to maximize your online presence.",
    heroTitle: "Professional SMO Services",
    heroDescription: "Optimize your social media profiles for maximum visibility and engagement.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Profile optimization",
      "Bio writing",
      "Image optimization",
      "Link building",
      "Performance tracking",
    ],
    whyChooseUs: [
      "Expert optimization",
      "Increased visibility",
      "Better engagement",
      "Proven results",
      "Affordable pricing",
    ],
    steps: [
      {
        title: "Audit",
        description: "Audit current profiles.",
      },
      {
        title: "Optimization",
        description: "Optimize profile elements.",
      },
      {
        title: "Content",
        description: "Create optimized content.",
      },
      {
        title: "Monitoring",
        description: "Monitor and report performance.",
      },
    ],
  },
  {
    id: "instagram-ads",
    slug: "instagram-ads",
    title: "Instagram Ads",
    category: "Social Media",
    description: "Professional Instagram advertising campaigns.",
    heroTitle: "Instagram Advertising Services",
    heroDescription: "Reach your target audience with strategic Instagram ad campaigns.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Campaign strategy",
      "Ad creation",
      "Audience targeting",
      "Performance optimization",
      "ROI tracking",
    ],
    whyChooseUs: [
      "Expert campaign management",
      "High ROI",
      "Creative team",
      "Transparent reporting",
      "Continuous optimization",
    ],
    steps: [
      {
        title: "Strategy",
        description: "Develop campaign strategy.",
      },
      {
        title: "Creation",
        description: "Create engaging ads.",
      },
      {
        title: "Launch",
        description: "Launch campaign.",
      },
      {
        title: "Optimization",
        description: "Optimize for performance.",
      },
    ],
  },
  {
    id: "facebook-ads",
    slug: "facebook-ads",
    title: "Facebook Ads",
    category: "Social Media",
    description: "Strategic Facebook advertising for business growth.",
    heroTitle: "Professional Facebook Ads Services",
    heroDescription: "Drive conversions with targeted Facebook ad campaigns.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Campaign management",
      "Ad design",
      "Audience targeting",
      "Retargeting",
      "Analytics reporting",
    ],
    whyChooseUs: [
      "Expert team",
      "High conversion rates",
      "Continuous optimization",
      "Transparent pricing",
      "Quick results",
    ],
    steps: [
      {
        title: "Planning",
        description: "Plan campaign goals.",
      },
      {
        title: "Design",
        description: "Design ads.",
      },
      {
        title: "Launch",
        description: "Launch campaign.",
      },
      {
        title: "Monitoring",
        description: "Monitor and optimize.",
      },
    ],
  },
  // SEO Services
  {
    id: "on-page-optimization",
    slug: "on-page-optimization",
    title: "On Page Optimization",
    category: "Search Engine Optimization",
    description: "On-page SEO optimization to improve search rankings.",
    heroTitle: "Professional On-Page Optimization",
    heroDescription: "Optimize your web pages for better search engine rankings and user experience.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Keyword optimization",
      "Meta tags optimization",
      "Content optimization",
      "URL structure",
      "Internal linking",
    ],
    whyChooseUs: [
      "SEO experts",
      "Proven results",
      "White-hat techniques",
      "Transparent process",
      "Regular reporting",
    ],
    steps: [
      {
        title: "Audit",
        description: "Complete SEO audit.",
      },
      {
        title: "Optimization",
        description: "Optimize page elements.",
      },
      {
        title: "Content",
        description: "Optimize content.",
      },
      {
        title: "Monitoring",
        description: "Monitor rankings.",
      },
    ],
  },
  {
    id: "off-page-optimization-services",
    slug: "off-page-optimization-services",
    title: "Off Page Optimization Services",
    category: "Search Engine Optimization",
    description: "Off-page SEO services to build authority and backlinks.",
    heroTitle: "Professional Off-Page Optimization",
    heroDescription: "Build domain authority through strategic link building and online reputation management.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Link building",
      "Guest posting",
      "Social signals",
      "Directory submissions",
      "Brand mentions",
    ],
    whyChooseUs: [
      "Quality backlinks",
      "White-hat methods",
      "Authority building",
      "Transparent reporting",
      "Proven results",
    ],
    steps: [
      {
        title: "Strategy",
        description: "Create link strategy.",
      },
      {
        title: "Outreach",
        description: "Outreach for link opportunities.",
      },
      {
        title: "Building",
        description: "Build quality backlinks.",
      },
      {
        title: "Monitoring",
        description: "Monitor link profile.",
      },
    ],
  },
  // Digital Marketing Services
  {
    id: "search-engine-optimization-company",
    slug: "search-engine-optimization-company",
    title: "Search Engine Optimization Company",
    category: "Digital Marketing",
    description: "Full-service SEO company for complete digital marketing solutions.",
    heroTitle: "Leading SEO Company",
    heroDescription: "Transform your online visibility with our comprehensive SEO services.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Complete SEO audit",
      "On-page optimization",
      "Off-page optimization",
      "Technical SEO",
      "Local SEO",
    ],
    whyChooseUs: [
      "10+ years experience",
      "Proven results",
      "Expert team",
      "Transparent reporting",
      "Customized strategies",
    ],
    steps: [
      {
        title: "Discovery",
        description: "Understand your goals.",
      },
      {
        title: "Strategy",
        description: "Develop SEO strategy.",
      },
      {
        title: "Implementation",
        description: "Implement SEO changes.",
      },
      {
        title: "Growth",
        description: "Monitor and scale results.",
      },
    ],
  },
  {
    id: "affiliate-marketing-services",
    slug: "affiliate-marketing-services",
    title: "Affiliate Marketing Services",
    category: "Digital Marketing",
    description: "Affiliate marketing programs to boost your sales.",
    heroTitle: "Professional Affiliate Marketing Services",
    heroDescription: "Launch and manage profitable affiliate programs for your business.",
    heroImage: "/images/services/ecommerce.jpg",
    whatWeOffer: [
      "Program setup",
      "Affiliate recruitment",
      "Commission management",
      "Performance tracking",
      "Marketing materials",
    ],
    whyChooseUs: [
      "Expert program management",
      "High-quality affiliates",
      "Transparent tracking",
      "Proven growth",
      "Dedicated support",
    ],
    steps: [
      {
        title: "Setup",
        description: "Set up affiliate program.",
      },
      {
        title: "Recruitment",
        description: "Recruit affiliates.",
      },
      {
        title: "Support",
        description: "Provide affiliate support.",
      },
      {
        title: "Scaling",
        description: "Scale program for growth.",
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
