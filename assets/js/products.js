const categorySpecs = {
    "laminates": {
        "heroDescription": "Premium quality laminates in 8 collections — from everyday inner to luxury acrylic & high texture.",
        "Thickness": "0.72mm - 1.5mm",
        "Types": "Plain, Wood, Marble, Digital, Acrylic, High Texture, Inner",
        "Brands": "CRAYON, Laminter, MIKOLAM, IVAS, RichLam, Luxe, Pastelo, Xosso, PureColor, Roto Shine, Amaryllis, BELADOR, BookMatch, Eco Touch, Star, Compass Navigate",
        "Pricing": "Starting from ₹595 to ₹6500"
    },
    "charcoal-sheets": {
        "heroDescription": "Interlocking premium charcoal sheets designed for seamless joint-free wall applications.",
        "Sizes": "8x4 ft, 8x2 ft",
        "Thickness": "4 mm, 6 mm",
        "Brands": "Vivre ADONIS, ALLURE, Infini, Decolite, DiMENza Ultimo, DUCOTEX, iCoal, SRH, SHORE Coalcraft, Creative",
        "Pricing": "₹250 / sqft"
    },
    "fluted-panel": {
        "heroDescription": "Premium architectural louvers available in Bamboo, Charcoal, MDF, Natural Wood, PVC and WPC.",
        "Materials": "Bamboo Fiber, Charcoal, MDF, Natural Wood, PVC, WPC",
        "Cost": "₹250 - ₹950 per sqft / piece",
        "Finishes": "Wooden, Solid, Metallic, Fluted, Rippled",
        "Usage": "Interior and Exterior options available"
    },
    "decoratives": {
        "heroDescription": "Exclusive decorative materials including Kalamkari cork, prefinished wall panels, and velvet & fabric sheets.",
        "Materials": "Cork Laminates, Prefinished Panels, Velvet & Fabric Panels",
        "Cost": "₹300 - ₹500 per sqft",
        "Finishes": "Kalamkari, PU, Ceramic, Marble, Stone, Metal, Leather",
        "Customization": "Available for Prefinished Panels"
    },
    "rattan-cane": {
        "heroDescription": "Traditional and modern rattan cane webbing including natural bamboo, synthetic PVC, and cane laminates.",
        "Types": "Cane Laminates, Natural Webbing, Synthetic Cane",
        "Sizes": "8x4 ft, Rolls (2x25', 3x25')",
        "Pricing": "₹110 - ₹350 per sqft",
        "Applications": "Furniture, Partitions, Wall highlights"
    },
    "3d-designs": {
        "heroDescription": "Fully customizable 3D HDHMR and MDF wall panels, parametric designs, and CNC routed temple highlights.",
        "Types": "Custom Wall Art, Parametric, God & Temple, Center & Corners",
        "Customization": "100% Customizable in Design, Size, and Thickness",
        "Pricing": "₹300 per sqft",
        "Base Material": "HDHMR & Premium MDF"
    },
    "pvc-wall-panels": {
        "heroDescription": "Durable, waterproof, and self-adhesive 3D PVC panels perfect for DIY renovations, wall highlights, and ceilings.",
        "Sizes": "12\"x12\", 20\"x20\", 40\"x20\", 2'x4'",
        "Thickness": "4mm to 50mm",
        "Pricing": "₹450 per sqft",
        "Features": "3D, Self-adhesive, Waterproof, DIY-friendly"
    },
    "mosaics": {
        "heroDescription": "Stunning 1x1 mosaic panels in glass, pearl, metal, and stone to create beautiful highlights.",
        "Materials": "Glass, Mother of Pearl, Metal, Stone, Granite, Wood",
        "Sizes": "1' x 1' Panels",
        "Pricing": "₹600 - ₹4000 per sqft",
        "Features": "Self-adhesive options available, High Reflectivity"
    },
    "korian": {
        "heroDescription": "Premium Corian (Korean) acrylic solid surfaces perfect for seamless table tops, countertops, and high-end furniture.",
        "Brand": "Vivanta Solid Surfaces",
        "Sizes": "8' x 2.5'",
        "Thickness": "6mm",
        "Pricing": "₹850 per sqft",
        "Features": "Anti-scratch, Anti-stain, Renewable (Buffable)"
    },
    "alabaster": {
        "heroDescription": "Premium translucent alabaster and onyx sheets designed for stunning backlit feature walls and luxury interiors.",
        "Brands": "Amber, Estilo, Lucido Slim, IS Alabaster",
        "Sizes": "8' x 4'",
        "Thickness": "1.5mm to 10mm",
        "Pricing": "₹180 - ₹3000 per sqft",
        "Features": "Translucent, Lightpassing, Premium Onyx Looks"
    },
    "stone-veneer": {
        "heroDescription": "Natural stone veneers, translucent stones, and 3D PU stone panels for premium tropical interior and exterior highlights.",
        "Materials": "Natural Stone, Fiberglass, Polyurethane (PU)",
        "Sizes": "8x4, 8x2, 4x2, 4x1, 10x4",
        "Thickness": "1.5mm to 100mm",
        "Pricing": "₹200 - ₹600 per sqft"
    },
    "ripple-ss": {
        "heroDescription": "Premium 304 grade Stainless Steel sheets featuring PVD coating in ripple, hammered, and flat patterns.",
        "Patterns": "Ripple, Hammered, Flat, Mirror",
        "Sizes": "8' x 4'",
        "Thickness": "0.6mm, 0.7mm, 1mm",
        "Pricing": "₹320 - ₹600 per sqft",
        "Features": "304 Grade SS, PVD Coated"
    },
    "exterior-products": {
        "heroDescription": "100% waterproof exterior cladding solutions including WPC louvers, aluminium fluted panels, PU stone, and HPL sheets.",
        "Categories": "WPC/Aluminium Louvers, PU & Fiber Stone, HPL Cladding",
        "Louver Sizes": "9.5'x5\", 9.5'x6\", 9.5'x8\", 9.5'x10\", 10'x10\"",
        "PU Panel Sizes": "4'x2', 4'x1', 8'x2', 9.5'x2'",
        "Stone Sizes": "8'x4', 10'x4'",
        "Features": "Weatherproof, Waterproof, UV Resistant"
    },
    "plywood-paneling": {
        "heroDescription": "Build with confidence! High-quality, durable plywood for furniture, cabinets, and all woodworking projects.",
        "Brands": "Century Plywood, Greenply, Kitply, Apple Valley, Sharon",
        "Grades": "BWP (Waterproof), MR (Commercial)",
        "Sizes": "8' x 4'",
        "Thickness": "6mm, 9mm, 12mm, 16mm, 19mm",
        "Pricing": "₹44 - ₹200 per sqft"
    },
    "flexible-panels": {
        "heroDescription": "Advanced flexible panels and bendable louvers perfect for wrapping around curves and columns. Can be bent up to 360°.",
        "Types": "Flexible Louvers, Bendable Stone, Liquid Metal, Soft Panels",
        "Sizes": "8'x1.5\", 8'x2', 8'x4'",
        "Thickness": "1mm, 1.5mm, 4mm, 6mm",
        "Pricing": "₹200 - ₹400 per sqft"
    },
    "soffit-panels": {
        "heroDescription": "Add a flawless finishing touch to your ceilings with durable PVC soffit panels and wooden fluted ceiling panels.",
        "Categories": "PVC Soffit, Exterior Soffits, Wooden Ceiling",
        "Sizes": "10'x1', 10'x10\", 13'x1'",
        "Pricing": "₹110 - ₹200 per sqft",
        "Features": "Conceals Wiring, Easy Install, Durable"
    },
    "timber-wood": {
        "heroDescription": "First-quality Old Burma Teak logs, Indian timber, and custom wooden mouldings available in any required size.",
        "Categories": "Premium Teak, Indian Timber, Wooden Moulding",
        "Sizes": "Any Custom Size",
        "Pricing": "On Request",
        "Features": "1st & 2nd Quality, Custom Cut, Fine Finishing"
    },
    "profile-works": {
        "heroDescription": "Professional aluminum and SS profile works including custom glass doors, sliding wardrobes, and soundproof partitions.",
        "Categories": "Glass Profile Doors, Partitions, SS Profiles",
        "Installation": "By Professional Interior Spot Team",
        "Sizes": "Custom Built / Site Fit",
        "Pricing": "On Request (Site Visit Required)"
    }
};

const productData = [
    { id: 1, name: "CRAYON", category: "laminate", url: "crayon.html", image: "assets/product/crayon-pages/page_019.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 2, name: "Laminter Plain Color", category: "laminate", url: "laminter.html", image: "assets/product/laminter-pages/page_020.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 3, name: "Luxe With Texture", category: "laminate", url: "luxe.html", image: "assets/product/luxe-pages/page_009.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 4, name: "MIKOLAM SOLID", category: "laminate", url: "mikolam.html", image: "assets/product/mikolam-pages/page_022.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 5, name: "Pastelo", category: "laminate", url: "pastelo.html", image: "assets/product/pastelo-pages/page_021.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 6, name: "Xosso", category: "laminate", url: "xosso.html", image: "assets/product/xosso-pages/page_017.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 7, name: "PC 0.8mm — PureColor Solid", category: "laminate", url: "pc-0-8mm.html", image: "assets/product/pc-pages/page_019.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 8, name: "Roto Shine (2025)", category: "laminate", url: "roto-shine.html", image: "assets/product/roto-pages/page_019.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 9, name: "Amaryllis Wood Laminate", category: "laminate", url: "amaryllis.html", image: "assets/product/amaryllis-pages/page_008.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 10, name: "BELADOR Wood & Marble", category: "laminate", url: "belador.html", image: "assets/product/belador-pages/page_019.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 11, name: "BookMatch Marble Laminate", category: "laminate", url: "bookmatch.html", image: "assets/product/bookmatch-pages/page_008.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 12, name: "Eco Touch Wood & Stone", category: "laminate", url: "eco-touch.html", image: "assets/product/eco-touch-pages/page_008.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 13, name: "RichLam Wood & Marble", category: "laminate", url: "richlam.html", image: "assets/product/richlam-pages/page_019.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 14, name: "Star 1mm Wood Laminate", category: "laminate", url: "star.html", image: "assets/product/star-pages/page_022.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 15, name: "Xosso Wood & Marble", category: "laminate", url: "xosso-wood.html", image: "assets/product/xosso-wood-pages/page_012.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 16, name: "Compass NAVIGATE Wood", category: "laminate", url: "compass-navigate.html", image: "assets/product/compass-navigate-pages/page_022.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 17, name: "IVAS Celebrations Wood", category: "laminate", url: "ivas-celebrations.html", image: "assets/product/ivas-celebrations-pages/page_027.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 18, name: "PRODEK INSIDE 0.72mm Inner Laminates", category: "laminate", url: "prodek-inside.html", image: "assets/product/prodek-inside-pages/page_018.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 19, name: "APPLE VALLEY 0.72mm Inner Laminates", category: "laminate", url: "apple-valley.html", image: "assets/product/apple-valley-pages/page_008.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 20, name: "Acrylikaa Acrylic Laminates", category: "laminate", url: "acrylikaa.html", image: "assets/product/acrylikaa-pages/page_005.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 21, name: "Aventis Surface Acrylic Laminates", category: "laminate", url: "aventis.html", image: "assets/product/aventis-pages/page_013.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 22, name: "Benetti Acrylic Laminates", category: "laminate", url: "benetti.html", image: "assets/product/benetti-pages/page_015.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 23, name: "Happy Colours Acrylic Laminates", category: "laminate", url: "happy-colours.html", image: "assets/product/happy-colours-pages/page_011.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 24, name: "Keshari Acrylic Laminates", category: "laminate", url: "keshari.html", image: "assets/product/keshari-pages/page_018.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 25, name: "Rang Faded SuedeMate Acrylic Laminates", category: "laminate", url: "rang-faded.html", image: "assets/product/rang-faded-pages/page_008.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 26, name: "Rang Maskara Acrylic Laminates", category: "laminate", url: "rang-maskara.html", image: "assets/product/rang-maskara-pages/page_019.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 27, name: "The Art Effect Digital Laminates", category: "laminate", url: "art-effect.html", image: "assets/product/art-effect-pages/page_023.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 28, name: "Textile Collection Digital Laminates", category: "laminate", url: "textile.html", image: "assets/product/textile-pages/page_012.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 29, name: "Only Cane Mica Digital Laminates", category: "laminate", url: "only-cane.html", image: "assets/product/only-cane-pages/page_010.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 30, name: "Ombre Digital Laminates", category: "laminate", url: "ombre.html", image: "assets/product/ombre-pages/page_005.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 31, name: "GM Shadow Digital Laminates", category: "laminate", url: "gm-shadow.html", image: "assets/product/gm-shadow-pages/page_010.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 32, name: "Lucas Digital Laminates", category: "laminate", url: "lucas.html", image: "assets/product/lucas-pages/page_009.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 33, name: "Ligital Series Digital Laminates", category: "laminate", url: "ligital.html", image: "assets/product/ligital-pages/page_010.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 34, name: "Lameca Digital Laminates", category: "laminate", url: "lameca.html", image: "assets/product/lameca-pages/page_005.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 35, name: "Digital Ace Laminates", category: "laminate", url: "digital-ace.html", image: "assets/product/digital-ace-pages/page_012.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 36, name: "IS Digital Print Laminates", category: "laminate", url: "is-digital-print.html", image: "assets/product/is-digital-print-pages/page_018.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 37, name: "IS Rangrez Digital Laminates", category: "laminate", url: "is-rangrez.html", image: "assets/product/is-rangrez-pages/page_010.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 38, name: "IS Nature Collection Laminates", category: "laminate", url: "is-nature.html", image: "assets/product/is-nature-pages/page_005.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 39, name: "Scout'Lam Digital Laminates", category: "laminate", url: "scout-lam.html", image: "assets/product/scout-lam-pages/page_025.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 40, name: "Canvas Series Digital Laminates", category: "laminate", url: "canvas.html", image: "assets/product/canvas-pages/page_005.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 41, name: "Arto Flap Digital Laminates", category: "laminate", url: "arto.html", image: "assets/product/arto-pages/page_005.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 42, name: "Artisan Flap Digital Laminates", category: "laminate", url: "artisan.html", image: "assets/product/artisan-pages/page_010.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 43, name: "Leafing Wood 1.25mm Laminates", category: "laminate", url: "leafing-wood.html", image: "assets/product/leafing-wood-pages/page_009.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 44, name: "1.25mm Flap High Texture", category: "laminate", url: "high-texture.html", image: "assets/product/high-texture-pages/page_013.jpg", price: "Enquire for Price", description: "Premium laminate material." },
    { id: 45, name: "Vivre ADONIS", category: "charcoal-sheets", url: "vivre-adonis.html", image: "assets/product/galleries/vivre-adonis/page_003.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 46, name: "ALLURE", category: "charcoal-sheets", url: "allure.html", image: "assets/product/galleries/allure/page_006.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 47, name: "Infini Decorative", category: "charcoal-sheets", url: "infini-decorative.html", image: "assets/product/galleries/infini-decorative/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 48, name: "Decolite", category: "charcoal-sheets", url: "decolite.html", image: "assets/product/galleries/decolite/page_002.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 49, name: "DiMENza Ultimo", category: "charcoal-sheets", url: "dimenza-ultimo.html", image: "assets/product/galleries/dimenza-ultimo/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 50, name: "DUCOTEX", category: "charcoal-sheets", url: "ducotex.html", image: "assets/product/galleries/ducotex/page_002.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 51, name: "iCoal", category: "charcoal-sheets", url: "icoal.html", image: "assets/product/galleries/icoal/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 52, name: "SRH Charcoal Panels", category: "charcoal-sheets", url: "srh-panels.html", image: "assets/product/galleries/srh-panels/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 53, name: "SHORE Coalcraft", category: "charcoal-sheets", url: "shore-coalcraft.html", image: "assets/product/galleries/shore-coalcraft/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 54, name: "Creative Charcoal", category: "charcoal-sheets", url: "creative-charcoal.html", image: "assets/product/galleries/creative-charcoal/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 55, name: "Charcoal Vol 11", category: "charcoal-sheets", url: "charcoal-vol-11.html", image: "assets/product/galleries/charcoal-vol-11/page_004.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 56, name: "Charco Charm", category: "charcoal-sheets", url: "charco-charm.html", image: "assets/product/galleries/charco-charm/page_007.jpg?v=4", price: "Enquire for Price", description: "Premium charcoal sheets material." },
    { id: 57, name: "Cressida Bamboo Fiber", category: "fluted-panel", url: "cressida-bamboo.html", image: "assets/product/galleries/cressida-bamboo/page_005.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 58, name: "Evolution Wood Valley", category: "fluted-panel", url: "evolution-wood-valley.html", image: "assets/product/galleries/evolution-wood-valley/page_003.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 59, name: "Lusso Bamboo Panels", category: "fluted-panel", url: "lusso-bamboo.html", image: "assets/product/galleries/lusso-bamboo/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 60, name: "Snazzy Bamboo Fiber", category: "fluted-panel", url: "snazzy-bamboo.html", image: "assets/product/galleries/snazzy-bamboo/page_005.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 61, name: "Aura Charcoal Louvers", category: "fluted-panel", url: "aura-charcoal.html", image: "assets/product/galleries/aura-charcoal/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 62, name: "Flutex Charcoal Panels", category: "fluted-panel", url: "flutex-charcoal.html", image: "assets/product/galleries/flutex-charcoal/page_004.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 63, name: "Stonite Charcoal Louvers", category: "fluted-panel", url: "stonite-charcoal.html", image: "assets/product/galleries/stonite-charcoal/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 64, name: "Rang Groove Earth", category: "fluted-panel", url: "rang-earth.html", image: "assets/product/galleries/rang-earth/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 65, name: "Rang Groove Forest", category: "fluted-panel", url: "rang-forest.html", image: "assets/product/galleries/rang-forest/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 66, name: "Rang Onit", category: "fluted-panel", url: "rang-onit.html", image: "assets/product/galleries/rang-onit/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 67, name: "Rang Groove Pastel", category: "fluted-panel", url: "rang-pastel.html", image: "assets/product/galleries/rang-pastel/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 68, name: "Chisel Rio", category: "fluted-panel", url: "chisel-rio.html", image: "assets/product/galleries/chisel-rio/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 69, name: "Confor", category: "fluted-panel", url: "confor.html", image: "assets/product/galleries/confor/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 70, name: "COVO BY-Duco", category: "fluted-panel", url: "covo-duco.html", image: "assets/product/galleries/covo-duco/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 71, name: "Cassa", category: "fluted-panel", url: "cassa.html", image: "assets/product/galleries/cassa/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 72, name: "Metlouver", category: "fluted-panel", url: "metlouver.html", image: "assets/product/galleries/metlouver/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 73, name: "Naturite", category: "fluted-panel", url: "naturite.html", image: "assets/product/galleries/naturite/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 74, name: "Rocko FLex", category: "fluted-panel", url: "rocko-flex.html", image: "assets/product/galleries/rocko-flex/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 75, name: "Royal Louvers", category: "fluted-panel", url: "royal-louvers.html", image: "assets/product/galleries/royal-louvers/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 76, name: "SK2 Bronte Louvers", category: "fluted-panel", url: "sk2-bronte.html", image: "assets/product/galleries/sk2-bronte/page_003.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 77, name: "SK2 Pastel Louvers", category: "fluted-panel", url: "sk2-pastel.html", image: "assets/product/galleries/sk2-pastel/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 78, name: "Sleek XL", category: "fluted-panel", url: "sleek-xl.html", image: "assets/product/galleries/sleek-xl/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 79, name: "SRH Flutes", category: "fluted-panel", url: "srh-flutes.html", image: "assets/product/galleries/srh-flutes/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 80, name: "Premium MDF Fluted Panel", category: "fluted-panel", url: "elewood-mdf.html", image: "assets/product/galleries/elewood-mdf/page_007.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 81, name: "Burma Teak Wood Louvers", category: "fluted-panel", url: "burma-teak.html", image: "assets/product/galleries/burma-teak/page_007.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 82, name: "Gold Lines PVC Louvers", category: "fluted-panel", url: "gold-lines.html", image: "assets/product/galleries/gold-lines/page_007.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 83, name: "9-Step PVC Panels", category: "fluted-panel", url: "9-step.html", image: "assets/product/galleries/9-step/page_007.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 84, name: "Axora PVC Fluted Panels", category: "fluted-panel", url: "axora.html", image: "assets/product/galleries/axora/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 85, name: "Designer PVC Louvers", category: "fluted-panel", url: "designer-pvc.html", image: "assets/product/galleries/designer-pvc/page_009.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 86, name: "Vivre Aluclad WPC", category: "fluted-panel", url: "vivre-aluclad.html", image: "assets/product/galleries/vivre-aluclad/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 87, name: "ZURI Exterior Louvers", category: "fluted-panel", url: "zuri.html", image: "assets/product/galleries/zuri/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium fluted panel material." },
    { id: 88, name: "IS Sloan Kalamkari Cork", category: "decoratives", url: "is-sloan-kalamkari.html", image: "assets/product/galleries/is-sloan-kalamkari/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 89, name: "IS Sloan Metallic Cork", category: "decoratives", url: "is-sloan-metallic.html", image: "assets/product/galleries/is-sloan-metallic/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 90, name: "SNS Naturo Cork", category: "decoratives", url: "sns-naturo.html", image: "assets/product/galleries/sns-naturo/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 91, name: "SNS Cork Highlighter", category: "decoratives", url: "sns-highlighter.html", image: "assets/product/galleries/sns-highlighter/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 92, name: "SNS Updated Cork Laminate", category: "decoratives", url: "sns-updated-laminate.html", image: "assets/product/galleries/sns-updated-laminate/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 93, name: "Mirror Koreo", category: "decoratives", url: "mirror-koreo.html", image: "assets/product/galleries/mirror-koreo/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 94, name: "Atlantis Meridian", category: "decoratives", url: "atlantis.html", image: "assets/product/galleries/atlantis/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 95, name: "CANVA Decorative Panels", category: "decoratives", url: "canva.html", image: "assets/product/galleries/canva/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 96, name: "IS Shannon", category: "decoratives", url: "is-shannon.html", image: "assets/product/galleries/is-shannon/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 97, name: "IS Slater Door", category: "decoratives", url: "is-slater.html", image: "assets/product/galleries/is-slater/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 98, name: "IS Stefino", category: "decoratives", url: "is-stefino.html", image: "assets/product/galleries/is-stefino/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 99, name: "IS Artisan", category: "decoratives", url: "is-artisan.html", image: "assets/product/galleries/is-artisan/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 100, name: "IS Hybrid", category: "decoratives", url: "is-hybrid.html", image: "assets/product/galleries/is-hybrid/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 101, name: "IS Liquid Metal", category: "decoratives", url: "is-liquid-metal.html", image: "assets/product/galleries/is-liquid-metal/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 102, name: "IS Marvel", category: "decoratives", url: "is-marvel.html", image: "assets/product/galleries/is-marvel/page_005.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 103, name: "Picassa Artisan", category: "decoratives", url: "picassa-artisan.html", image: "assets/product/galleries/picassa-artisan/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 104, name: "Picassa Hybrid", category: "decoratives", url: "picassa-hybrid.html", image: "assets/product/galleries/picassa-hybrid/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 105, name: "Picassa Liquid Metal", category: "decoratives", url: "picassa-liquid-metal.html", image: "assets/product/galleries/picassa-liquid-metal/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 106, name: "Picassa Marvel", category: "decoratives", url: "picassa-marvel.html", image: "assets/product/galleries/picassa-marvel/page_005.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 107, name: "Spectre", category: "decoratives", url: "spectre.html", image: "assets/product/galleries/spectre/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 108, name: "The Concept Theory", category: "decoratives", url: "concept-theory.html", image: "assets/product/galleries/concept-theory/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 109, name: "Premium Panel Collection 1", category: "decoratives", url: "collection-1.html", image: "assets/product/galleries/collection-1/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 110, name: "Premium Panel Collection 2", category: "decoratives", url: "collection-2.html", image: "assets/product/galleries/collection-2/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 111, name: "Premium Panel Collection 3", category: "decoratives", url: "collection-3.html", image: "assets/product/galleries/collection-3/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 112, name: "Premium Panel Collection 4", category: "decoratives", url: "collection-4.html", image: "assets/product/galleries/collection-4/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 113, name: "Premium Panel Collection 5", category: "decoratives", url: "collection-5.html", image: "assets/product/galleries/collection-5/page_006.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 114, name: "Velour", category: "decoratives", url: "velour.html", image: "assets/product/galleries/velour/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 115, name: "Velour Series 1", category: "decoratives", url: "velour-1.html", image: "assets/product/galleries/velour-1/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 116, name: "3D Velvet 8x4", category: "decoratives", url: "velvet-3d.html", image: "assets/product/galleries/velvet-3d/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 117, name: "Velvet Panels", category: "decoratives", url: "velvet-panels.html", image: "assets/product/galleries/velvet-panels/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 118, name: "Velvet Verve", category: "decoratives", url: "velvet-verve.html", image: "assets/product/galleries/velvet-verve/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 119, name: "Picassa Meta Fabric", category: "decoratives", url: "picassa-meta-fabric.html", image: "assets/product/galleries/picassa-meta-fabric/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 120, name: "Picassa Fabricio", category: "decoratives", url: "picassa-fabricio.html", image: "assets/product/galleries/picassa-fabricio/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 121, name: "Picassa Leather Lam", category: "decoratives", url: "picassa-leather-lam.html", image: "assets/product/galleries/picassa-leather-lam/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 122, name: "XYA Leather Laminate", category: "decoratives", url: "xya-leather.html", image: "assets/product/galleries/xya-leather/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 123, name: "C Leather Laminate", category: "decoratives", url: "c-leather.html", image: "assets/product/galleries/c-leather/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 124, name: "IS Sutton Flexible Louvers", category: "decoratives", url: "is-sutton.html", image: "assets/product/galleries/is-sutton/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 125, name: "IS Shade", category: "decoratives", url: "is-shade.html", image: "assets/product/galleries/is-shade/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 126, name: "IS Selene", category: "decoratives", url: "is-selene.html", image: "assets/product/galleries/is-selene/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 127, name: "Icarus Kathiyawadi", category: "decoratives", url: "icarus.html", image: "assets/product/galleries/icarus/page_006.jpg?v=2", price: "Enquire for Price", description: "Premium decoratives material." },
    { id: 128, name: "BP Cane Flap", category: "rattan-cane", url: "bp-cane.html", image: "assets/product/galleries/bp-cane/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 129, name: "Only Cane Mica Series", category: "rattan-cane", url: "cane-mica.html", image: "assets/product/galleries/cane-mica/page_007.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 130, name: "Premium Cane Laminate", category: "rattan-cane", url: "cane-laminate.html", image: "assets/product/galleries/cane-laminate/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 131, name: "Burlap by Cosmic Decor", category: "rattan-cane", url: "burlap.html", image: "assets/product/galleries/burlap/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 132, name: "Cane Theory Webbing", category: "rattan-cane", url: "cane-theory.html", image: "assets/product/galleries/cane-theory/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 133, name: "IS Stich Cane", category: "rattan-cane", url: "is-stich-cane.html", image: "assets/product/galleries/is-stich-cane/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 134, name: "Lamiteq by Gloirio", category: "rattan-cane", url: "lamiteq.html", image: "assets/product/galleries/lamiteq/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 135, name: "Monoso Tessuto", category: "rattan-cane", url: "monoso-tessuto.html", image: "assets/product/galleries/monoso-tessuto/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 136, name: "Tessuto Synthetic Cane", category: "rattan-cane", url: "tessuto.html", image: "assets/product/galleries/tessuto/page_008.jpg?v=1", price: "Enquire for Price", description: "Premium rattan cane material." },
    { id: 137, name: "3D Wall Art 1200 Series", category: "3d-designs", url: "3d-wall-1200.html", image: "assets/product/galleries/3d-wall-1200/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 138, name: "469 3D Panels", category: "3d-designs", url: "469-3d-panels.html", image: "assets/product/galleries/469-3d-panels/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 139, name: "IS Custom CNC Doors", category: "3d-designs", url: "is-cnc-doors.html", image: "assets/product/galleries/is-cnc-doors/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 140, name: "IS Flexible Fluted HDHMR", category: "3d-designs", url: "is-flex-fluted.html", image: "assets/product/galleries/is-flex-fluted/page_008.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 141, name: "IS Parametric Collection", category: "3d-designs", url: "is-parametric.html", image: "assets/product/galleries/is-parametric/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 142, name: "469 God & Temple Carvings", category: "3d-designs", url: "469-god.html", image: "assets/product/galleries/469-god/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 143, name: "IS Decorative Corners", category: "3d-designs", url: "is-corners.html", image: "assets/product/galleries/is-corners/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 144, name: "IS Decorative Mouldings", category: "3d-designs", url: "is-mouldings.html", image: "assets/product/galleries/is-mouldings/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium 3d designs material." },
    { id: 145, name: "12x12 Self Adhesive PVC", category: "pvc-wall-panels", url: "pvc-12x12.html", image: "assets/product/galleries/pvc-12x12/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 146, name: "Zoomwall 3D Puzzle", category: "pvc-wall-panels", url: "zoomwall-puzzle.html", image: "assets/product/galleries/zoomwall-puzzle/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 147, name: "Zoomwall 3D Panels", category: "pvc-wall-panels", url: "zoomwall-panels.html", image: "assets/product/galleries/zoomwall-panels/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 148, name: "Standard 3D PVC Collection", category: "pvc-wall-panels", url: "unpriced-pvc.html", image: "assets/product/galleries/unpriced-pvc/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 149, name: "Soni Decor 2x2 Panels", category: "pvc-wall-panels", url: "soni-decor-2x2.html", image: "assets/product/galleries/soni-decor-2x2/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 150, name: "IS Self Adhesive PVC Panels", category: "pvc-wall-panels", url: "is-self-adhesive.html", image: "assets/product/galleries/is-self-adhesive/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 151, name: "20x40 Self Adhesive Series", category: "pvc-wall-panels", url: "pvc-20x40.html", image: "assets/product/galleries/pvc-20x40/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 152, name: "2x4 Large Format PVC", category: "pvc-wall-panels", url: "pvc-2x4.html", image: "assets/product/galleries/pvc-2x4/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium pvc wall panels material." },
    { id: 153, name: "Dazzle Mosaics", category: "mosaics", url: "dazzle-mosaics.html", image: "assets/product/galleries/dazzle-mosaics/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 154, name: "ED DIVA Luxurious", category: "mosaics", url: "ed-diva.html", image: "assets/product/galleries/ed-diva/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 155, name: "Jazz Mosaics", category: "mosaics", url: "jazz-mosaics.html", image: "assets/product/galleries/jazz-mosaics/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 156, name: "STM Series Metallic", category: "mosaics", url: "stm-series.html", image: "assets/product/galleries/stm-series/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 157, name: "MM Series Stone", category: "mosaics", url: "mm-series.html", image: "assets/product/galleries/mm-series/page_004.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 158, name: "SM Series Stone", category: "mosaics", url: "sm-series.html", image: "assets/product/galleries/sm-series/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 159, name: "TK Series Mixed", category: "mosaics", url: "tk-series.html", image: "assets/product/galleries/tk-series/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 160, name: "Standard Mosaic Collection", category: "mosaics", url: "standard-mosaics.html", image: "assets/product/galleries/standard-mosaics/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium mosaics material." },
    { id: 161, name: "Vivanta Solid Surfaces", category: "korian", url: "vivanta-solid-surfaces.html", image: "assets/product/galleries/vivanta-solid-surfaces/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium korian material." },
    { id: 162, name: "Amber Alabaster", category: "alabaster", url: "amber-alabaster.html", image: "assets/product/galleries/amber-alabaster/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium alabaster material." },
    { id: 163, name: "Estilo Alabaster", category: "alabaster", url: "estilo-alabaster.html", image: "assets/product/galleries/estilo-alabaster/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium alabaster material." },
    { id: 164, name: "Lucido Slim Panels", category: "alabaster", url: "lucido-slim.html", image: "assets/product/galleries/lucido-slim/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium alabaster material." },
    { id: 165, name: "IS Alabaster Collection", category: "alabaster", url: "is-alabaster.html", image: "assets/product/galleries/is-alabaster/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium alabaster material." },
    { id: 166, name: "FlexartOera Natural Stone", category: "stone-veneer", url: "flexartoera.html", image: "assets/product/galleries/flexartoera/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 167, name: "Master Sandera Series", category: "stone-veneer", url: "master-sandera.html", image: "assets/product/galleries/master-sandera/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 168, name: "Matchoera Live Series", category: "stone-veneer", url: "matchoera-live.html", image: "assets/product/galleries/matchoera-live/page_010.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 169, name: "Master 10x4 Large Format", category: "stone-veneer", url: "master-10x4.html", image: "assets/product/galleries/master-10x4/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 170, name: "HOMOERA Translucent Stone", category: "stone-veneer", url: "homoera.html", image: "assets/product/galleries/homoera/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 171, name: "Master Onyxera Series", category: "stone-veneer", url: "master-onyxera.html", image: "assets/product/galleries/master-onyxera/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 172, name: "ROCKOERA Rock Stone", category: "stone-veneer", url: "rockoera.html", image: "assets/product/galleries/rockoera/page_008.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 173, name: "Premium PU Wall Panels", category: "stone-veneer", url: "pu-panels.html", image: "assets/product/galleries/pu-panels/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium stone veneer material." },
    { id: 174, name: "Premium SS Sheets Collection", category: "ripple-ss", url: "ss-collection.html", image: "assets/product/galleries/ss-collection/page_004.jpg?v=2", price: "Enquire for Price", description: "Premium ripple ss material." },
    { id: 175, name: "Aluluxe Aluminium Louvers", category: "exterior-products", url: "aluluxe-louvers.html", image: "assets/product/galleries/aluluxe-louvers/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 176, name: "ZURI Fluted Louvers", category: "exterior-products", url: "zuri-fluted.html", image: "assets/product/galleries/zuri-fluted/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 177, name: "ZURI WPC Planks", category: "exterior-products", url: "zuri-wpc.html", image: "assets/product/galleries/zuri-wpc/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 178, name: "Soficlad Exterior WPC", category: "exterior-products", url: "soficlad-wpc.html", image: "assets/product/galleries/soficlad-wpc/page_006.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 179, name: "Standard WPC Cladding", category: "exterior-products", url: "standard-wpc.html", image: "assets/product/galleries/standard-wpc/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 180, name: "Premium Exterior Louvers Collection", category: "exterior-products", url: "exterior-louvers-col.html", image: "assets/product/galleries/exterior-louvers-col/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 181, name: "ROCKOERA PU Stone", category: "exterior-products", url: "rockoera-pu.html", image: "assets/product/galleries/rockoera-pu/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 182, name: "Premium PU Wall Panels", category: "exterior-products", url: "pu-panels-exterior.html", image: "assets/product/galleries/pu-panels-exterior/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 183, name: "FlexartOera Exterior Stone", category: "exterior-products", url: "flexartoera-exterior.html", image: "assets/product/galleries/flexartoera-exterior/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 184, name: "Master Sandera Exterior Veneer", category: "exterior-products", url: "master-sandera-exterior.html", image: "assets/product/galleries/master-sandera-exterior/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 185, name: "Fascia Stylam HPL", category: "exterior-products", url: "fascia-hpl.html", image: "assets/product/galleries/fascia-hpl/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 186, name: "Green HPL Panels", category: "exterior-products", url: "green-hpl.html", image: "assets/product/galleries/green-hpl/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium exterior products material." },
    { id: 187, name: "Premium Plywood Collection", category: "plywood-paneling", url: "plywood-collection.html", image: "assets/product/galleries/plywood-collection/page_002.jpg?v=2", price: "Enquire for Price", description: "Premium plywood paneling material." },
    { id: 188, name: "Mystic Flex Louvers", category: "flexible-panels", url: "mystic-flex.html", image: "assets/product/galleries/mystic-flex/page_008.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 189, name: "Stonish Flexible Stone", category: "flexible-panels", url: "stonish-flex.html", image: "assets/product/galleries/stonish-flex/page_006.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 190, name: "Metalixo Liquid Metal", category: "flexible-panels", url: "metalixo-liquid.html", image: "assets/product/galleries/metalixo-liquid/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 191, name: "Ciscon Metal Panel", category: "flexible-panels", url: "ciscon-metal.html", image: "assets/product/galleries/ciscon-metal/page_013.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 192, name: "Master 10x4 Flexible Stone", category: "flexible-panels", url: "master-flex-10x4.html", image: "assets/product/galleries/master-flex-10x4/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 193, name: "Graffito Soft Panels", category: "flexible-panels", url: "graffito-soft.html", image: "assets/product/galleries/graffito-soft/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 194, name: "IS Shade Designer Sheets", category: "flexible-panels", url: "is-shade-designer.html", image: "assets/product/galleries/is-shade-designer/page_009.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 195, name: "IS Sloan Metallic Cork", category: "flexible-panels", url: "is-sloan-cork.html", image: "assets/product/galleries/is-sloan-cork/page_011.jpg?v=2", price: "Enquire for Price", description: "Premium flexible panels material." },
    { id: 196, name: "Auraluxe Decor Soffit", category: "soffit-panels", url: "auraluxe-soffit.html", image: "assets/product/galleries/auraluxe-soffit/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium soffit panels material." },
    { id: 197, name: "JEON PVC Soffit", category: "soffit-panels", url: "jeon-soffit.html", image: "assets/product/galleries/jeon-soffit/page_012.jpg?v=2", price: "Enquire for Price", description: "Premium soffit panels material." },
    { id: 198, name: "MY Decor PVC Soffit", category: "soffit-panels", url: "my-decor-soffit.html", image: "assets/product/galleries/my-decor-soffit/page_004.jpg?v=2", price: "Enquire for Price", description: "Premium soffit panels material." },
    { id: 199, name: "Zuri Exterior Soffit", category: "soffit-panels", url: "zuri-soffit.html", image: "assets/product/galleries/zuri-soffit/page_007.jpg?v=2", price: "Enquire for Price", description: "Premium soffit panels material." },
    { id: 200, name: "Soficlad Exterior Panels", category: "soffit-panels", url: "soficlad-exterior-soffit.html", image: "assets/product/galleries/soficlad-exterior-soffit/page_006.jpg?v=2", price: "Enquire for Price", description: "Premium soffit panels material." },
    { id: 201, name: "Celesto Wooden Ceiling", category: "soffit-panels", url: "celesto-ceiling.html", image: "assets/product/galleries/celesto-ceiling/page_012.jpg?v=2", price: "Enquire for Price", description: "Premium soffit panels material." },
    { id: 202, name: "Old Burma Teak Wood", category: "timber-wood", url: "old-burma-teak.html", image: "assets/product/galleries/old-burma-teak/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium timber wood material." },
    { id: 203, name: "Indian Timber Wood", category: "timber-wood", url: "indian-timber.html", image: "assets/product/galleries/indian-timber/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium timber wood material." },
    { id: 204, name: "Melamine Timber Planks", category: "timber-wood", url: "timber-planks.html", image: "assets/product/galleries/timber-planks/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium timber wood material." },
    { id: 205, name: "Custom Profile Glass Door 1", category: "profile-works", url: "profile-door-1.html", image: "assets/product/galleries/profile-door-1/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium profile works material." },
    { id: 206, name: "Custom Profile Glass Door 2", category: "profile-works", url: "profile-door-2.html", image: "assets/product/galleries/profile-door-2/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium profile works material." },
    { id: 207, name: "Custom Profile Glass Door 3", category: "profile-works", url: "profile-door-3.html", image: "assets/product/galleries/profile-door-3/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium profile works material." },
    { id: 208, name: "Custom Profile Glass Door 4", category: "profile-works", url: "profile-door-4.html", image: "assets/product/galleries/profile-door-4/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium profile works material." },
    { id: 209, name: "Smart Glass Soundproof Partition", category: "profile-works", url: "smart-glass-partition.html", image: "assets/product/galleries/smart-glass-partition/page_001.webp?v=2", price: "Enquire for Price", description: "Premium profile works material." },
    { id: 210, name: "Profile Sliding Door Demo", category: "profile-works", url: "sliding-door-demo.html", image: "assets/img/logo.png", price: "Enquire for Price", description: "Premium profile works material." },
    { id: 211, name: "Aluminium Slim Profile", category: "profile-works", url: "slim-profile.html", image: "assets/product/galleries/slim-profile/page_001.jpg?v=2", price: "Enquire for Price", description: "Premium profile works material." },
];

document.addEventListener('DOMContentLoaded', () => {
    // URL Parameter Category Filtering
    const urlParams = new URLSearchParams(window.location.search);
    const catFilter = urlParams.get('cat');
    const productGrid = document.querySelector('.product-grid');
    const heroSection = document.getElementById('category-hero-section');
    const specContainer = document.getElementById('category-specs');

    if (heroSection && catFilter) {
        renderHero(catFilter);
    }

    if (productGrid) {
        renderProducts(catFilter);
    }

    if (specContainer && catFilter) {
        renderSpecs(catFilter);
    }

    function renderHero(category) {
        const specs = categorySpecs[category];
        if (!specs) return;

        const displayTitle = category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const bgImage = `assets/img/categories/${category}.png`;

        heroSection.innerHTML = `
            <div class="category-hero" style="background-image: url('${bgImage}');">
                <div class="hero-content">
                    <h1>${displayTitle}</h1>
                    <p>${specs.heroDescription || "Premium interior solutions for your modern home."}</p>
                </div>
            </div>
        `;
        document.title = `${displayTitle} | Interior Spot Chennai`;
    }

    function renderProducts(category) {
        let filtered = productData;
        if (category && category !== 'all') {
            filtered = productData.filter(p => p.category === category);
        }

        if (filtered.length > 0) {
            productGrid.innerHTML = filtered.map(product => {
                let catDisplay = product.category.replace(/-/g, ' ');
                catDisplay = catDisplay.replace(/\b\w/g, c => c.toUpperCase());
                return `
                <div class="product-card">
                    <div class="product-image" style="height:250px; overflow:hidden;">
                        <img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" onerror="this.src='assets/img/logo.png'">
                    </div>
                    <div class="product-info" style="display:flex; flex-direction:column; gap:10px;">
                        <h4 style="margin:0; font-size:18px;">${product.name}</h4>
                        <p class="specs" style="color:#666; margin:0;"><i class="fas fa-layer-group"></i> ${catDisplay}</p>
                        <p class="price" style="font-weight:700; color:var(--next-blue); margin:0;">Enquire for Price</p>
                        <a href="${product.url}" class="btn" style="padding: 10px 20px; width: 100%; margin-top: 5px; display: inline-block; text-align: center;">View Details</a>
                    </div>
                </div>
            `}).join('');
        } else {
            productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 50px;">Detailed products coming soon for this category. Please contact us for more information.</p>';
        }
    }

    function renderSpecs(category) {
        const specs = categorySpecs[category];
        if (!specs) return;

        let html = `
            <h2 class="section-title">Technical Specifications</h2>
            <div class="specs-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
        `;

        const iconMap = {
            "Inner": "fas fa-layer-group",
            "Outer": "fas fa-shield-alt",
            "Thickness": "fas fa-ruler-combined",
            "Plywood Thickness": "fas fa-ruler-combined",
            "Sizes": "fas fa-expand-arrows-alt",
            "Size": "fas fa-expand-arrows-alt",
            "Types": "fas fa-th-list",
            "Applications": "fas fa-home",
            "Finishes": "fas fa-paint-roller",
            "Brands": "fas fa-tags",
            "Features": "fas fa-star",
            "Materials": "fas fa-box-open",
            "Cost": "fas fa-rupee-sign",
            "Services": "fas fa-tools",
            "Reference": "fas fa-images",
            "Common": "fas fa-info-circle",
            "Designs": "fas fa-drafting-table",
            "Quality": "fas fa-award",
            "Description": "fas fa-align-left",
            "Uses": "fas fa-check-circle",
            "Products": "fas fa-cubes",
            "For Quotation": "fas fa-file-invoice-dollar",
            "Customization": "fas fa-tools",
            "Patterns": "fas fa-border-all"
        };

        for (const [key, value] of Object.entries(specs)) {
            if (key === 'heroDescription' || key === 'Name') continue;

            const icon = iconMap[key] || "fas fa-info-circle";

            html += `
                <div class="spec-card">
                    <i class="${icon}"></i>
                    <h4>${key}</h4>
            `;

            if (Array.isArray(value)) {
                html += `
                    <ul style="list-style: none; padding: 0; margin: 0;">
                        ${value.map(item => `<li style="font-size: 14px; margin-bottom: 5px; font-weight: 500;"><i class="fas fa-caret-right" style="font-size: 10px; margin-right: 5px; color: var(--primary);"></i> ${item}</li>`).join('')}
                    </ul>
                `;
            } else {
                html += `<p>${value}</p>`;
            }

            html += `</div>`;
        }

        html += `</div>`;
        specContainer.innerHTML = html;
    }

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1500; display: none; background: rgba(0,0,0,0.5);';
        document.body.appendChild(overlay);

        mobileToggle.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.classList.toggle('active');
            overlay.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
        });

        const mobileClose = document.querySelector('.mobile-close');
        if (mobileClose) {
            mobileClose.addEventListener('click', () => {
                navLinks.classList.remove('active');
                overlay.style.display = 'none';
            });
        }

        overlay.addEventListener('click', () => {
            navLinks.classList.remove('active');
            overlay.style.display = 'none';
        });
    }

    // Mobile Categories Toggle Logic
    const mobileCatToggle = document.querySelector('.mobile-cat-toggle');
    const mobileCatItem = document.querySelector('.mobile-categories-item');
    if (mobileCatToggle && mobileCatItem) {
        mobileCatToggle.addEventListener('click', (e) => {
            e.preventDefault();
            mobileCatItem.classList.toggle('active');
        });
    }

    // Search Dropdown Toggle Logic
    const searchDropdown = document.querySelector('.search-dropdown');
    const allDropdownText = document.querySelector('.all-dropdown');

    if (searchDropdown && allDropdownText) {
        // Update text if on a category page
        const urlParams = new URLSearchParams(window.location.search);
        const currentCat = urlParams.get('cat');
        if (currentCat) {
            const formattedCat = currentCat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            // Keep the icon
            allDropdownText.innerHTML = `${formattedCat} <i class="fas fa-chevron-down"></i>`;
        }

        searchDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchDropdown.contains(e.target)) {
                searchDropdown.classList.remove('active');
            }
        });
    }

        // --- Search Logic Implementation ---
    function performSearch(queryInput) {
        let query = "";
        if (typeof queryInput === 'string') {
            query = queryInput.trim().toLowerCase();
        } else {
            const inputEl = document.querySelector('.header-search input');
            if(inputEl) query = inputEl.value.trim().toLowerCase();
        }
        if (!query) return;

        // Define category mappings for common keywords and potential typos
                const searchMappings = {
            // 1mm plain colour
            '1mm plain colour laminate': 'laminter.html',
            'plain colour laminate': 'laminter.html',
            'plain mica': 'laminter.html',
            '1mm mica': 'laminter.html',
            '1mm laminate': 'laminter.html',
            'pastel laminate': 'laminter.html',

            // 0.8mm
            '0.8 mm laminate': 'pc-0-8mm.html',
            '0.8mm laminate': 'pc-0-8mm.html',
            'plain colours laminate': 'pc-0-8mm.html',

            // wooden laminate
            'wooden': 'amaryllis.html',
            'wooden mica': 'amaryllis.html',
            'wooden laminate': 'amaryllis.html',
            '1mm wooden mica': 'amaryllis.html',
            'wood laminate': 'amaryllis.html',
            '0.8mm wooden mica': 'amaryllis.html',

            // marble laminate
            'marbel laminate': 'belador.html',
            '1mm marbel laminate': 'belador.html',
            'marble mica': 'belador.html',
            'stone texture laminate': 'belador.html',
            'stone laminates': 'belador.html',
            '0.8mm marbel laminate': 'belador.html',

            // inner laminates
            'inner laminates': 'prodek-inside.html',
            '0.72mm': 'prodek-inside.html',
            '0.72': 'prodek-inside.html',
            '0.72mm laminates': 'prodek-inside.html',
            '0.72 liner': 'prodek-inside.html',
            'liner': 'prodek-inside.html',
            'liner lam': 'prodek-inside.html',
            'inner mica': 'prodek-inside.html',

            // acrylic laminates
            'premium acrylic laminates': 'acrylikaa.html',
            'acrylic laminates': 'acrylikaa.html',
            'acrylic mica': 'acrylikaa.html',
            'kitchen laminates': 'acrylikaa.html',
            'glossy laminate': 'acrylikaa.html',
            'high glossy laminate': 'acrylikaa.html',
            '1.5mm acrylic': 'acrylikaa.html',
            'anti scratch laminate': 'acrylikaa.html',
            'anti scratch acrylic': 'acrylikaa.html',
            'anti scratch acrylic laminates': 'acrylikaa.html',
            'pastel acrylic laminate': 'acrylikaa.html',

            // digital laminates
            '1mm digital': 'art-effect.html',
            '1mm digital laminates': 'art-effect.html',
            'digital laminate': 'art-effect.html',
            'printed laminate': 'art-effect.html',
            'abstract laminate': 'art-effect.html',
            '1mm printed laminate': 'art-effect.html',
            'printed mica': 'art-effect.html',

            // high texture
            '1.25mm digital': 'high-texture.html',
            '1.25mm high texture laminates': 'high-texture.html',
            'texture laminate': 'high-texture.html',
            'hybrid laminate': 'high-texture.html',
            'texture mica': 'high-texture.html',
            '1.25mm mica': 'high-texture.html',
            '1.25mm laminate': 'high-texture.html',

            // General laminates
            'laminates': 'laminate.html',
            'mica': 'laminate.html',
            'sunmica': 'laminate.html',
            'laminate': 'laminate.html',

            // Charcoal
            'charcoal sheet': 'vivre-adonis.html',
            'charcoal panel': 'vivre-adonis.html',
            'charcoal wall panel': 'vivre-adonis.html',
            
            // Bamboo Louvers
            'bamboo panels': 'cressida-bamboo.html',
            'bamboo fluted panels': 'cressida-bamboo.html',
            'bamboo louvers': 'cressida-bamboo.html',

            // Charcoal Louvers
            'charcoal panels': 'aura-charcoal.html',
            'charcoal fluted panels': 'aura-charcoal.html',
            'charcoal louvers': 'aura-charcoal.html',

            // MDF Louvers
            'mdf panels': 'elewood-mdf.html',
            'mdf fluted panels': 'elewood-mdf.html',
            'charcoal mdf': 'elewood-mdf.html',

            // Wood Louvers
            'wood panels': 'burma-teak.html',
            'wood fluted panels': 'burma-teak.html',
            'wooden flute': 'burma-teak.html',
            'wooden wall panels': 'burma-teak.html',

            // PVC Louvers (Pdf all)
            'pvc fluted panels': 'gold-lines.html',
            'pvc louvers': 'gold-lines.html',
            '10 feet louvers': 'gold-lines.html',
            '12 inch louvers': 'gold-lines.html',

            // WPC Louvers
            'wpc panels': 'vivre-aluclad.html',
            'wpc fluted panels': 'vivre-aluclad.html',
            'wpc louvers': 'vivre-aluclad.html',
            'exterior fluted': 'vivre-aluclad.html',
            'exterior louvers': 'vivre-aluclad.html',
            'exterior panels': 'vivre-aluclad.html',

            // Generic Louvers
            'louver': 'louvers.html',
            'fluted': 'louvers.html',
            'louvered panel': 'louvers.html',
            'fluted panel': 'louvers.html',
            'waterproof panel': 'louvers.html',
            'waterproof louvers': 'louvers.html',
            'wooden louvers': 'louvers.html',
            'premium louvers': 'louvers.html',

            // Cork
            'cork': 'is-sloan-cork.html',
            'cork laminates': 'is-sloan-cork.html',
            'cork sheet': 'is-sloan-cork.html',
            'kalamkari cork': 'is-sloan-kalamkari.html',
            'metalic cork': 'is-sloan-metallic.html',

            // Prefinished panels
            'decorative wall panels': 'collection-1.html',
            '3d wall panels': 'collection-1.html',
            'prefinished panels': 'collection-1.html',
            'interior panels': 'collection-1.html',
            
            // Velvet
            'velvet panels': 'velvet-panels.html',
            'velvet wall panels': 'velvet-panels.html',
            'fabric sheet': 'velvet-panels.html',
            'fabric wall panels': 'velvet-panels.html',
            'fabric laminates': 'velvet-panels.html',

            // Cane laminates
            'cane laminates': 'cane-laminate.html',
            'cane texture laminate': 'cane-laminate.html',

            // Natural cane
            'rattan cane': 'cane-theory.html',
            'natural cane': 'cane-theory.html',
            'natural rattan cane': 'cane-theory.html',
            'natural rattan': 'cane-theory.html',
            'rattan cane webbing': 'cane-theory.html',
            'webbing': 'cane-theory.html',
            'natural webbing': 'cane-theory.html',
            'bamboo cane': 'cane-theory.html',
            'bamboo webbing': 'cane-theory.html',

            // Synthetic cane
            'synthetic cane': 'tessuto.html',
            'nylon cane': 'tessuto.html',
            'cane roll': 'tessuto.html',
            'came webbing cane in mica base': 'tessuto.html',

            // General Cane
            'cane': 'rattan-cane.html',

            // 3d mdf
            '3d wall panel': '3d-designs.html',
            '3d designs': '3d-designs.html',
            '3d mdf': '3d-designs.html',
            '3d hdhmr': '3d-designs.html',
            '3d mdf wall panel': '3d-designs.html',
            'customise wall panel': '3d-designs.html',

            // 3d pvc
            'pvc panels': 'pvc-12x12.html',
            'pvc wall panels': 'pvc-12x12.html',
            '3d self adhesive panels': 'pvc-12x12.html',
            'self adhesive panels': 'pvc-12x12.html',
            'diy wall panels': 'pvc-12x12.html',

            // Mosaics
            'mosaic': 'dazzle-mosaics.html',
            'mosaic tiles': 'dazzle-mosaics.html',
            'mosaic panels': 'dazzle-mosaics.html',
            'self adhesive mosaic': 'dazzle-mosaics.html',
            'glass mosaic': 'dazzle-mosaics.html',
            'mother of pearl mosaic': 'dazzle-mosaics.html',
            'metalic mosaic': 'dazzle-mosaics.html',
            '1x1 panels': 'dazzle-mosaics.html',

            // Corian
            'korean': 'vivanta-solid-surfaces.html',
            'korean table top': 'vivanta-solid-surfaces.html',
            'acrylic solid surface': 'vivanta-solid-surfaces.html',
            'solid acrylic': 'vivanta-solid-surfaces.html',

            // Alabaster
            'alabaster': 'amber-alabaster.html',
            'alabaster sheet': 'amber-alabaster.html',
            'translucent alabaster': 'amber-alabaster.html',
            'translucent sheet': 'amber-alabaster.html',
            'translucent': 'amber-alabaster.html',
            'onix': 'amber-alabaster.html',
            'lightpassing sheet': 'amber-alabaster.html',
            'lightpassing alabaster': 'amber-alabaster.html',

            // Stone products
            'stone': 'flexartoera.html',
            'veneer': 'flexartoera.html',
            'stone veneer': 'flexartoera.html',
            'natural stone': 'flexartoera.html',
            'natural stone veneer': 'flexartoera.html',
            'fiber stone': 'flexartoera.html',
            'stone wall panel': 'flexartoera.html',
            'pu wall panels': 'rockoera.html',
            'pu feather': 'rockoera.html',
            'pu stone': 'rockoera.html',
            'pu stone panel': 'rockoera.html',
            'exterior stone panel': 'flexartoera.html',

            // SS ripple
            'ss sheet': 'ripple-ss.html',
            'stainless steel sheet': 'ripple-ss.html',
            'ripple sheet': 'ripple-ss.html',
            'hammer sheet': 'ripple-ss.html',
            'stainless steel ripple sheet': 'ripple-ss.html',
            '304 ss': 'ripple-ss.html',
            'ss': 'ripple-ss.html',
            'stainless steel': 'ripple-ss.html',
            'matel sheet': 'ripple-ss.html',

            // Exterior
            'wpc': 'vivre-aluclad.html',
            'aluminium': 'vivre-aluclad.html',
            'wpc exterior louvers': 'vivre-aluclad.html',
            'aluminium exterior louvers': 'vivre-aluclad.html',
            'aluminium panel': 'vivre-aluclad.html',
            'aluminium fluted': 'vivre-aluclad.html',

            // Plywoods
            'ply': 'plywood.html',
            'plywood': 'plywood.html',
            'century': 'plywood.html',
            'century plywood': 'plywood.html',
            'plyboard': 'plywood.html',
            'waterproof ply': 'plywood.html',
            'century architect': 'plywood.html',
            'century club prime': 'plywood.html',
            'architect': 'plywood.html',
            'club prime': 'plywood.html',
            'century sainik': 'plywood.html',
            'century sainik bwp': 'plywood.html',
            'century sainik mr': 'plywood.html',
            'bwp plywood': 'plywood.html',
            'waterproof plywood': 'plywood.html',
            'mr plywood': 'plywood.html',
            'commercial plywood': 'plywood.html',
            'greenply': 'plywood.html',
            'green ply': 'plywood.html',
            'green plywood': 'plywood.html',
            'greenply plywood': 'plywood.html',
            'prime': 'plywood.html',
            'bwp': 'plywood.html',
            'green echotec': 'plywood.html',
            'greenply commercial ply': 'plywood.html',
            'club gold': 'plywood.html',
            'club platinum': 'plywood.html',

            // Flexible panels
            'flexible': 'mystic-flex.html',
            'flexible fluted': 'mystic-flex.html',
            'flex': 'mystic-flex.html',
            'flexi': 'mystic-flex.html',
            'flexi louvers': 'mystic-flex.html',
            'flexible louvers': 'mystic-flex.html',
            'flexible wall panels': 'mystic-flex.html',
            'bendable panel': 'mystic-flex.html',
            'flexible panel': 'mystic-flex.html',
            'bendable wall panel': 'mystic-flex.html',

            // Soffit panels
            'soffit': 'soficlad-wpc.html',
            'soffit panels': 'soficlad-wpc.html',
            'pvc soffit panel': 'soficlad-wpc.html',
            'ceiling panel': 'soficlad-wpc.html',
            'ceiling': 'soficlad-wpc.html',
            'ceiling louvers': 'soficlad-wpc.html',
            'ceiling fluted panel': 'soficlad-wpc.html',
            'wooden ceiling panel': 'soficlad-wpc.html',
            '10x1 panel': 'soficlad-wpc.html',

            // Timber
            'wood': 'old-burma-teak.html',
            'timber': 'old-burma-teak.html',
            'teak': 'old-burma-teak.html',
            'burma teak': 'old-burma-teak.html',
            '1st teak': 'old-burma-teak.html',
            'old burma': 'old-burma-teak.html',
            '2nd teak': 'old-burma-teak.html',
            'timber wood': 'old-burma-teak.html',
            'log': 'old-burma-teak.html',
            'wooden log': 'old-burma-teak.html',
            'bidding': 'old-burma-teak.html',
            'wooden beeding': 'old-burma-teak.html',
            'wooden moulding': 'old-burma-teak.html',

            // Profile work
            'profile': 'slim-profile.html',
            'aluminium profile': 'slim-profile.html',
            'profile work': 'slim-profile.html',
            'profile door': 'slim-profile.html',
            'sliding door': 'slim-profile.html',
            'glass door': 'slim-profile.html',
            'profile glass door': 'slim-profile.html',
            'aluminium profile door': 'slim-profile.html',
            'partition': 'slim-profile.html',
            'profile partition': 'slim-profile.html',
            'ss profile': 'slim-profile.html',
            'steel profile': 'slim-profile.html',
            'door': 'slim-profile.html',
            'sliding': 'slim-profile.html',
            'wardrobe': 'slim-profile.html'
        };

        // 1. Direct mapping check
        if (searchMappings[query]) {
            const target = searchMappings[query];
            if (target.endsWith('.html')) {
                window.location.href = target;
                return;
            }
            if (specializedPages[target]) {
                window.location.href = specializedPages[target];
                return;
            }
            window.location.href = `category.html?cat=${target}`;
            return;
        }


        // 2. Check if query is contained in any category key
        const categoryKeys = Object.keys(categorySpecs);
        const matchedKey = categoryKeys.find(key => key.includes(query) || query.includes(key));

        if (matchedKey) {
            if (specializedPages[matchedKey]) {
                window.location.href = specializedPages[matchedKey];
                return;
            }
            window.location.href = `category.html?cat=${matchedKey}`;
            return;
        }

        // 3. Check if query matches any product name
        const matchedProduct = productData.find(p => p.name.toLowerCase().includes(query));
        if (matchedProduct) {
            window.location.href = matchedProduct.url;
            return;
        }


                // 4. Fallback: Search all categories page
        window.location.href = `categories.html`;
    }

    // Event Delegation for Search Input
    document.addEventListener('keypress', (e) => {
        if (e.target && e.target.matches('.header-search input')) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(e.target.value);
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target && (e.target.matches('.header-search .fa-search') || e.target.closest('.header-search .fa-search'))) {
            performSearch();
        }
    });

    // --- Professional Live Search Autocomplete ---
    let originalCategories = null;
    
    document.addEventListener('input', (e) => {
        if (e.target && e.target.matches('.header-search input')) {
            const searchInputEl = e.target;
            const searchContainer = searchInputEl.closest('.header-search');
            if (!searchContainer || typeof productData === 'undefined') return;

            let autocompleteMenu = searchContainer.querySelector('.autocomplete-menu');
            if (!autocompleteMenu) {
                autocompleteMenu = document.createElement('ul');
                autocompleteMenu.className = 'autocomplete-menu';
                // Inline styles for professional look
                autocompleteMenu.style.cssText = `
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #fff;
                    border: 1px solid #eee;
                    border-radius: 8px;
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                    margin-top: 5px;
                    padding: 5px 0;
                    list-style: none;
                    z-index: 1000;
                    max-height: 400px;
                    overflow-y: auto;
                    display: none;
                `;
                searchContainer.style.position = 'relative';
                searchContainer.appendChild(autocompleteMenu);
            }

            const query = searchInputEl.value.trim().toLowerCase();
            
            // Clear current menu
            autocompleteMenu.innerHTML = '';
            
            if (query.length < 2) {
                autocompleteMenu.style.display = 'none';
                return;
            }

            // Filter productData
            const matches = productData.filter(product => {
                const nameMatch = product.name.toLowerCase().includes(query);
                const catMatch = product.category.toLowerCase().includes(query);
                return nameMatch || catMatch;
            }).slice(0, 8); // limit to top 8 suggestions

            if (matches.length > 0) {
                matches.forEach(product => {
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <a href="${product.url}" style="display: flex; align-items: center; gap: 15px; padding: 10px 15px; text-decoration: none; border-bottom: 1px solid #f5f5f5; transition: background 0.2s;">
                            <img src="${product.image}" alt="${product.name}" style="width: 45px; height: 45px; border-radius: 6px; object-fit: cover; flex-shrink: 0; border: 1px solid #eee;">
                            <div style="display: flex; flex-direction: column; overflow: hidden;">
                                <span style="font-weight: 600; color: #1a3b8f; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${product.name}</span>
                                <span style="font-size: 12px; color: #666; text-transform: capitalize; margin-top: 2px;">${product.category.replace('-', ' ')}</span>
                            </div>
                        </a>
                    `;
                    // Hover effect
                    const a = li.querySelector('a');
                    a.addEventListener('mouseenter', () => a.style.background = '#f8f9fa');
                    a.addEventListener('mouseleave', () => a.style.background = 'transparent');
                    autocompleteMenu.appendChild(li);
                });
            } else {
                const li = document.createElement('li');
                li.innerHTML = '<span style="padding: 15px 20px; display: block; color: #888; font-style: italic; font-size: 14px; text-align: center;">No matching products found.</span>';
                autocompleteMenu.appendChild(li);
            }
            
            autocompleteMenu.style.display = 'block';
        }
    });

    // Close autocomplete when clicking outside
    document.addEventListener('click', (e) => {
        const searchInputEl = document.querySelector('.header-search input');
        const autocompleteMenu = document.querySelector('.autocomplete-menu');
        
        if (autocompleteMenu && searchInputEl) {
            if (!searchInputEl.contains(e.target) && !autocompleteMenu.contains(e.target)) {
                autocompleteMenu.style.display = 'none';
            }
        }
        
        // Retain category dropdown closing logic
        const searchDropdownEl = document.querySelector('.search-dropdown');
        if (searchDropdownEl && !searchDropdownEl.contains(e.target)) {
             searchDropdownEl.classList.remove('active');
        }
    });

    // --- Redesigned Homepage Logic ---
    
    // Tab functionality
    const tabBtns = document.querySelectorAll('.nl-tab-btn');
    const tabContents = document.querySelectorAll('.nl-tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tabId = btn.getAttribute('data-tab');
                
                // Remove active classes
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active classes
                btn.classList.add('active');
                const activeContent = document.getElementById(tabId);
                if (activeContent) activeContent.classList.add('active');
            });
        });
    }

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.nl-faq-item');

    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.nl-faq-question');
            question.addEventListener('click', () => {
                // Toggle active class on clicked item
                const isActive = item.classList.contains('active');
                
                // Close all items
                faqItems.forEach(i => i.classList.remove('active'));
                faqItems.forEach(i => {
                    const icon = i.querySelector('i');
                    if (icon) icon.className = 'fas fa-plus';
                });

                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('i');
                    if (icon) icon.className = 'fas fa-minus';
                }
            });
        });
    }

    function initDynamicProducts() {
        // --- Dynamic Related Products ---
        const relatedContainer = document.getElementById('dynamic-related-products');
        if (relatedContainer && typeof productData !== 'undefined') {
            const shuffled = [...productData].sort(() => 0.5 - Math.random());
            const selected = shuffled.slice(0, 4);
            
            let cardsHtml = '';
            selected.forEach(prod => {
                let catDisplay = prod.category.replace(/-/g, ' ');
                catDisplay = catDisplay.replace(/\b\w/g, c => c.toUpperCase());
                
                cardsHtml += `
                    <div class="brand-card">
                        <a href="${prod.url}" class="card-img" style="display:block; height:100%; text-decoration:none;">
                            <img src="${prod.image}" alt="${prod.name}" width="250" height="312" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='assets/img/categories/${prod.category}.png';">
                        </a>
                        <div class="card-body">
                            <a href="${prod.url}" class="brand-name" style="text-decoration:none;">${prod.name}</a>
                            <div class="brand-desc">${prod.description || 'Premium interior materials from Interior Spot.'}</div>
                            <div class="card-specs">
                                <div class="spec-item"><i class="fas fa-layer-group"></i> ${catDisplay}</div>
                                <div class="price">Enquire for Price</div>
                            </div>
                            <div class="card-actions">
                                <a href="https://wa.me/918122258359?text=Hi, I'm interested in ${prod.name}. Please share details." class="btn-wa" target="_blank" aria-label="Enquire about ${prod.name} on WhatsApp"><i class="fab fa-whatsapp"></i> Enquire</a>
                                <a href="tel:+918122258359" class="btn-phone" aria-label="Call to enquire about ${prod.name}"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>
                `;
            });
            relatedContainer.innerHTML = cardsHtml;
        }

        // --- Dynamic Daily Picks (index.html) ---
        const dailyPicksContainer = document.getElementById('dynamic-daily-picks');
        if (dailyPicksContainer && typeof productData !== 'undefined') {
            const newProducts = [
                { id: 901, name: "Spectre WPC Louvers", category: "decoratives", url: "is-catalogue-spectre.html", image: "assets/product/galleries/catalogue-spectre/page_001.jpg", price: "Enquire for Price", description: "Premium WPC Louvers by Spectre" },
                { id: 902, name: "3D Customized Designs", category: "3d-designs", url: "is-catalogue-469-3d.html", image: "assets/product/galleries/catalogue-469-3d/page_001.jpg", price: "Enquire for Price", description: "Premium 3D Customized Designs" },
                { id: 903, name: "Laminato Highlighters", category: "decoratives", url: "is-catalogue-laminato.html", image: "assets/product/galleries/catalogue-laminato/page_004.jpg", price: "Enquire for Price", description: "Premium Highlighters by Laminato" },
                { id: 904, name: "KD Customized Mosaics", category: "mosaics", url: "is-catalogue-kd.html", image: "assets/product/galleries/catalogue-kd/page_003.jpg", price: "Enquire for Price", description: "Premium Customized Mosaic Tiles by KD Associates" }
            ];
            const shuffled = [...productData].sort(() => 0.5 - Math.random());
            const selected = [...newProducts, ...shuffled.slice(0, 4)]; // Show 4 new + 4 random
            
            let cardsHtml = '';
            selected.forEach(prod => {
                let catDisplay = prod.category.replace(/-/g, ' ');
                catDisplay = catDisplay.replace(/\b\w/g, c => c.toUpperCase());
                
                cardsHtml += `
                    <div class="brand-card swiper-slide">
                        <div class="card-img" style="position:relative;">
                            <div style="position:absolute; top:12px; left:12px; background:#c5a059; color:white; padding:4px 10px; border-radius:20px; font-size:10px; font-weight:800; z-index:10; text-transform:uppercase; box-shadow:0 2px 5px rgba(0,0,0,0.2);">Daily Pick</div>
                            <a href="${prod.url}" style="display:block; height:100%; text-decoration:none;">
                                <img src="${prod.image}" alt="${prod.name}" width="250" height="312" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover;" onerror="this.onerror=null; this.src='assets/img/categories/${prod.category}.png';">
                            </a>
                        </div>
                        <div class="card-body">
                            <a href="${prod.url}" class="brand-name" style="text-decoration:none;">${prod.name}</a>
                            <div class="brand-desc">${prod.description || 'Premium interior materials from Interior Spot.'}</div>
                            <div class="card-specs">
                                <div class="spec-item"><i class="fas fa-layer-group"></i> ${catDisplay}</div>
                                <div class="price">Enquire for Price</div>
                            </div>
                            <div class="card-actions">
                                <a href="https://wa.me/918122258359?text=Hi, I'm interested in ${prod.name}. Please share details." class="btn-wa" target="_blank" aria-label="Enquire about ${prod.name} on WhatsApp"><i class="fab fa-whatsapp"></i> Enquire</a>
                                <a href="tel:+918122258359" class="btn-phone" aria-label="Call to enquire about ${prod.name}"><i class="fas fa-phone"></i></a>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            // Insert generated cards into container without duplication
            dailyPicksContainer.innerHTML = cardsHtml;

            // Initialize Swiper for Daily Picks
            if (typeof Swiper !== 'undefined') {
                new Swiper('.suggestionSwiper', {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                    freeMode: true,
                    grabCursor: true,
                    loop: true,
                    speed: 4000,
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    },
                    on: {
                        init: function () {
                            this.wrapperEl.style.transitionTimingFunction = "linear";
                        }
                    },
                    breakpoints: {
                        320: {
                            spaceBetween: 15
                        },
                        768: {
                            spaceBetween: 30
                        }
                    }
                });
            }
        }
    }

    if ('requestIdleCallback' in window) {
        requestIdleCallback(initDynamicProducts);
    } else {
        setTimeout(initDynamicProducts, 200);
    }
});
