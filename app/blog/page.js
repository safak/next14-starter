// app/blog/page.js
"use client";

import { useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import {
  Search,
  Share2,
  Bookmark,
  Star,
  Clock,
  Camera,
  Palette,
  Tag,
  Filter,
  TrendingUp,
  Calendar,
  ThumbsUp,
  X,
} from "lucide-react";

import Navbar from "@/components/Navbar";
import React from "react";
import { Check, Mail } from "lucide-react";

export default function FashionBlogPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [showFilters, setShowFilters] = useState(false);
  const [bookmarkedPosts, setBookmarkedPosts] = useState(new Set());

  // Newsletter signup state
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  // Fashion-focused blog data
  const fashionPosts = [
    {
      id: 1,
      title:
        "SpringFest 25: Quod Invicta's Spectacular 2nd Place Victory in Navyata",
      excerpt:
        "Celebrating our incredible achievement at SpringFest 25! Quod Invicta secured 2nd position in the prestigious Navyata event, showcasing talent and determination.",
      content:
        "What an incredible journey it has been! Our team Quod Invicta has made us proud by securing the 2nd position in the highly competitive Navyata event at SpringFest 25. This achievement represents months of hard work, dedication, and teamwork...",
      author: "Event Team",
      authorAvatar: "ET",
      date: "2025-01-20",
      readTime: "5 min read",
      category: "Achievement",
      tags: [
        "SpringFest 25",
        "Quod Invicta",
        "Navyata",
        "2nd Position",
        "Victory",
      ],
      featured: true,
      image: "033656d5-0706-4fd8-ac4f-dfb977583b1e.jpeg",
    },
    {
      id: 2,
      title: "Panache '25: The Ultimate Fashion Extravaganza at Lakme Salon",
      excerpt:
        "Get ready for the most glamorous fashion event of the year! Panache '25 promises an unforgettable evening of style, creativity, and runway magic.",
      content:
        "Mark your calendars for January 19, 2025! Quod Invicta presents Panache '25, the most anticipated fashion event powered by Lakme Salon. Starting at 6 PM onwards at LHC Parking Lot, this spectacular show will feature cutting-edge fashion, stunning models, and the latest trends...",
      author: "Quod Invicta Team",
      authorAvatar: "QI",
      date: "2025-01-15",
      readTime: "4 min read",
      category: "Events",
      tags: [
        "Panache 25",
        "Fashion Show",
        "Lakme Salon",
        "Quod Invicta",
        "January 2025",
      ],
      featured: true,
      image: "panache.webp",
    },
    {
      id: 3,
      title: "CulFest Masquerade: A Night of Mystery and Glamour",
      excerpt:
        "Step into a world of elegance and intrigue! Our CulFest Masquerade brought together stunning masks, dazzling outfits, and unforgettable memories under the spotlight.",
      content:
        "What a spectacular evening it was! The CulFest Masquerade transformed our venue into a mystical ballroom where creativity met sophistication. Participants showcased incredible masked looks, from vintage Venetian styles to modern artistic interpretations...",
      author: "CulFest Team",
      authorAvatar: "CF",
      date: "2025-01-18",
      readTime: "6 min read",
      category: "Cultural Events",
      tags: ["CulFest", "Masquerade", "Cultural Night", "Mystery", "Glamour"],
      featured: true,
      image: "IMG_2600.JPG",
    },
    {
      id: 4,
      title: "Couture Craft: Where Fashion Meets Artistry at CulFest '25",
      excerpt:
        "Experience the ultimate fusion of creativity and craftsmanship! Couture Craft showcases handmade fashion excellence, powered by Lakme Salon at NIT Jamshedpur.",
      content:
        "Get ready for an extraordinary display of handcrafted fashion! On January 17, 2025, at DJL HC 302 from 11 AM onwards, Quod Invicta presents Couture Craft - a celebration of artisanal fashion and creative expression. This unique event combines traditional craftsmanship with contemporary design...",
      author: "Quod Invicta",
      authorAvatar: "QI",
      date: "2025-01-15",
      readTime: "7 min read",
      category: "Cultural Events",
      tags: [
        "Couture Craft",
        "CulFest 25",
        "Handmade Fashion",
        "NIT Jamshedpur",
        "Artisanal",
      ],
      featured: true,
      image: "cc.webp",
    },
    {
      id: 5,
      title: "Fables in Fashion: A Magical Style Journey at CulFest '25",
      excerpt:
        "Step into a world where fashion meets fantasy! Fables in Fashion brings enchanting storytelling to the runway, powered by Lakme Salon.",
      content:
        "Join us for an extraordinary fashion experience on January 18, 2025, at GAT from 3 PM onwards! Quod Invicta presents Fables in Fashion - where timeless tales come alive through stunning fashion narratives. This unique event combines the magic of storytelling with cutting-edge fashion design...",
      author: "Quod Invicta",
      authorAvatar: "QI",
      date: "2025-01-16",
      readTime: "6 min read",
      category: "Cultural Events",
      tags: [
        "Fables in Fashion",
        "CulFest 25",
        "Fashion Show",
        "Storytelling",
        "Creative Fashion",
      ],
      featured: true,
      image: "fif.webp",
    },
    {
      id: 6,
      title: "Meet the Dream Team: The Creative Minds Behind Quod Invicta",
      excerpt:
        "Get to know the talented individuals who make the magic happen! Our dedicated team brings passion, creativity, and excellence to every event and achievement.",
      content:
        "Behind every successful event and achievement at Quod Invicta stands an incredible team of passionate individuals. From creative directors to event coordinators, designers to performers - each member brings unique talents and unwavering dedication to our collective vision...",
      author: "Quod Invicta",
      authorAvatar: "QI",
      date: "2025-01-19",
      readTime: "5 min read",
      category: "Team",
      tags: [
        "Team Photo",
        "Quod Invicta",
        "Behind the Scenes",
        "Team Members",
        "Unity",
      ],
      featured: true,
      image: "e282adb2-b9c5-4dee-ad6f-55944f61071a.jpeg",
    },
  ];

  const categories = [
    "all",
    "Achievements",
    "Events",
    "Cultural Events",
    "DIY",
    "Style Guide",
    "Vintage",
  ];
  const sortOptions = [
    { value: "latest", label: "Latest", icon: Calendar },
    { value: "popular", label: "Most Popular", icon: ThumbsUp },
    { value: "trending", label: "Trending", icon: TrendingUp },
  ];

  const featuredPosts = useMemo(
    () => fashionPosts.filter((post) => post.featured),
    []
  );

  // Filter and search functionality with useMemo for performance
  const filteredPosts = useMemo(() => {
    let filtered = fashionPosts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    // Sort posts
    const sortedFiltered = [...filtered];
    switch (sortBy) {
      case "latest":
        sortedFiltered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    return sortedFiltered;
  }, [searchTerm, selectedCategory, sortBy]);

  // Newsletter functionality
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Store the email for demonstration (in real app, this would be sent to your backend)
    console.log("Fashion newsletter signup:", {
      email,
      targetEmail: "invicta.nit.jsr@gmail.com",
    });

    setIsSubmitted(true);
    setEmail("");
  };

  // Post interactions
  const handleBookmark = (postId) => {
    setBookmarkedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const handleShare = async (post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You could show a toast notification here
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  if (!isSignedIn) {
    return null;
  }

  // Newsletter success component
  const NewsletterSuccess = () => (
    <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md p-6 rounded-2xl border border-pink-300/20 shadow-lg">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4">
          <Check className="h-8 w-8 text-white" />
        </div>
        <h4 className="text-lg font-bold text-white mb-2">
          Welcome to Fashion Club!
        </h4>
        <p className="text-sm text-white/80 mb-4">
          Thank you for joining our fashion community! You'll start receiving
          daily style inspiration soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors"
        >
          Subscribe another email
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-22">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filter Bar */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search fashion articles..."
                    className="w-full pl-10 pr-10 py-3 bg-white/20 text-white placeholder-white/60 rounded-xl border border-white/30 focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-3 top-3 h-4 w-4 text-white/60 hover:text-white"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-3 bg-white/20 text-white rounded-xl border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </button>
              </div>

              {/* Filters */}
              {showFilters && (
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Category Filter */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Category
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full bg-white/20 text-white border border-white/30 rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-500"
                      >
                        {categories.map((category) => (
                          <option
                            key={category}
                            value={category}
                            className="bg-gray-800"
                          >
                            {category === "all" ? "All Categories" : category}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sort Filter */}
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Sort by
                      </label>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="w-full bg-white/20 text-white border border-white/30 rounded-xl px-3 py-2 focus:ring-2 focus:ring-pink-500"
                      >
                        {sortOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="bg-gray-800"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Featured Posts */}
            {selectedCategory === "all" && !searchTerm && (
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <Star className="h-8 w-8 mr-3 text-yellow-400" />
                  Featured Invicta Stories
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.slice(0, 2).map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                      onClick={() => router.push(`/blog/${post.id}`)}
                    >
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-100 h-78 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-pink-300 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-white/80 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white text-sm font-medium">
                                {post.authorAvatar}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">
                                {post.author}
                              </p>
                              <p className="text-xs text-white/60">
                                {new Date(post.date).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 text-white/60">
                            <span className="flex items-center text-xs">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Palette className="h-8 w-8 mr-3 text-pink-400" />
                {searchTerm
                  ? `Search Results (${filteredPosts.length})`
                  : "INVICTA Articles"}
              </h3>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-white/60 text-lg mb-4">
                    No articles found
                  </div>
                  <p className="text-white/40">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map((post) => (
                    <article
                      key={post.id}
                      className="group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="md:flex">
                        <div className="md:w-1/3 relative overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => router.push(`/blog/${post.id}`)}
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                          {post.featured && (
                            <div className="absolute top-4 right-4">
                              <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                                Featured
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-6 md:w-2/3">
                          <h4
                            className="text-xl font-bold text-white mb-2 hover:text-pink-300 cursor-pointer transition-colors"
                            onClick={() => router.push(`/blog/${post.id}`)}
                          >
                            {post.title}
                          </h4>

                          <p className="text-white/80 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center text-xs text-white/70 bg-white/10 px-2 py-1 rounded-full hover:bg-white/20 cursor-pointer transition-colors"
                                onClick={() => setSearchTerm(tag)}
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">
                                  {post.authorAvatar}
                                </span>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-white">
                                  {post.author}
                                </p>
                                <div className="flex items-center space-x-2 text-xs text-white/60">
                                  <span>
                                    {new Date(post.date).toLocaleDateString()}
                                  </span>
                                  <span>•</span>
                                  <span>{post.readTime}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-3 text-white/60">
                                <button
                                  className="flex items-center hover:text-green-400 transition-colors"
                                  onClick={() => handleShare(post)}
                                >
                                  <Share2 className="h-4 w-4" />
                                </button>
                                <button
                                  className={`flex items-center transition-colors ${
                                    bookmarkedPosts.has(post.id)
                                      ? "text-yellow-400"
                                      : "hover:text-yellow-400"
                                  }`}
                                  onClick={() => handleBookmark(post.id)}
                                >
                                  <Bookmark
                                    className={`h-4 w-4 ${
                                      bookmarkedPosts.has(post.id)
                                        ? "fill-current"
                                        : ""
                                    }`}
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter */}
            {isSubmitted ? (
              <NewsletterSuccess />
            ) : (
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-md p-6 rounded-2xl border border-pink-300/20 shadow-lg">
                <h4 className="text-lg font-bold text-white mb-2 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-pink-400" />
                  Style Inspiration
                </h4>
                <p className="text-sm text-white/80 mb-4">
                  Join our fashion community and get daily style inspiration
                  delivered to your inbox!
                </p>

                <div className="space-y-3">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                      className="w-full px-4 py-3 bg-white/20 text-white placeholder-white/60 rounded-xl border border-white/30 focus:ring-2 focus:ring-pink-500 focus:border-transparent backdrop-blur-sm text-sm transition-all duration-300"
                    />
                    {error && (
                      <p className="text-red-300 text-xs mt-1 flex items-center">
                        <span className="w-1 h-1 bg-red-300 rounded-full mr-2"></span>
                        {error}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-3 rounded-xl font-medium hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 text-sm flex items-center justify-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Join Fashion Club
                  </button>
                </div>

                <p className="text-xs text-white/60 mt-3 text-center">
                  By subscribing, you agree to receive fashion updates and style
                  tips.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
