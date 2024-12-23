const blogData = {
  1: {
    title: "Life’s Mixed Bouquet: Embracing Every Season with Strength",
    category: "Self-Discovery",
    img: "assets/images/blog-1.jpg",
    content: [
      "Life is often compared to a bouquet of flowers, each bloom representing a unique season filled with its own challenges and joys. For Victoria Mukungu, this metaphor is deeply personal. She understands the ups and downs that come with every chapter of life, including the journey of singleness. Through her experiences, Victoria reminds us that every season holds its beauty and lessons. Singleness, for example, isn’t a limitation but an opportunity to grow, explore, and thrive.",

      "As you navigate your journey, consider what “flower” symbolizes your current season. Is it a vibrant sunflower, radiating joy? Or perhaps a sturdy rose, representing resilience? No matter the bloom, it’s part of your unique bouquet, designed to reflect your vibrancy and faith.",

      "So, embrace this season with an open heart and a spirit of gratitude. You have so much to offer, regardless of where you are in life’s garden."
    ]
  },
  2: {
    title: "God-Given Cheerleaders: Finding Hope in Life’s Challenges",
    category: "Connection",
    img: "assets/images/blog-2.jpg",
    content: [
      "Life’s journey can often feel overwhelming, but God places cheerleaders in our path to encourage us along the way. Victoria Mukungu has made it her mission to be that cheerleader for others, sharing her experiences of faith and resilience.",

      "Cheerleaders come in many forms—a supportive friend, a loving family member, or even a kind stranger. They remind us of our worth and help us find the strength to keep going. Victoria’s story is a testament to the power of community and encouragement. She believes that, through faith and connection, we can overcome life’s most daunting challenges.",

      "Who has been a cheerleader in your life? And how can you cheer for others on their journey? Together, we can uplift each other in a world that sometimes feels too heavy."
    ]
  },
  3: {
    title: "Walking Alone but Never Lonely: Rediscovering Yourself in Singleness",
    category: "Empowerment",
    img: "assets/images/blog-3.jpg",
    content: [
      "Singleness often comes with mixed emotions. For Victoria Mukungu, it has been a time of profound self-discovery and growth. Instead of seeing singleness as a waiting period, she views it as a season filled with purpose and opportunities. It’s a chance to nurture your talents, build deeper faith, and forge meaningful connections.",

      "This journey can sometimes feel isolating, but it’s important to remember that you’re never truly alone. Take this time to explore your passions, develop new skills, and strengthen your spiritual foundation. Each step you take is a step toward a more fulfilled and authentic version of yourself.",

      "Singleness is not a detour but a destination of its own, filled with beauty and lessons to cherish."
    ]
  },
  4: {
    title: "Blooming with Faith: How to Find Strength in Life’s Transitions",
    category: "Devotion",
    img: "assets/images/blog-4.jpg",
    content: [
      "Change is inevitable, but with faith, it becomes an opportunity for growth. Victoria Mukungu’s life is a testament to the strength that comes from trusting God during life’s transitions. Whether facing heartbreak, uncertainty, or a new beginning, faith can be the anchor that keeps you steady.",

      "Each transition is like a seed planted in the soil of life. With patience, care, and trust in God, it grows into something beautiful. Victoria’s stories of resilience remind us that even in the darkest times, we can find the courage to bloom.",

      "As you navigate your own seasons of change, hold onto your faith and remember that every storm has the potential to nourish the garden of your life."
    ]
  }
};
$(document).ready(function () {
  // Handle click on the "Read More" button
  $('.read-more').on('click', function () {
    // Get the id of the clicked blog card
    const id = parseInt($(this).data('id'));
    const blog = blogData[id];
    const blogImg = blog.img;

    // Update the modal's title and body
    if (blog) {
      $('#dynamicModalLabel').text(blog.title);
      $('#modal-img img').attr('src', blogImg);
      if (category != "" || category != null) {
        $('#category').html(`<i class="lni lni-tag"></i> ${blog.category}`);
      }


      const paragraphs = blog.content.map(paragraph => `<p>${paragraph}</p>`).join('');
      $('#blog-content').html(`
            ${paragraphs}
          `);
      console.log(paragraphs);
    }
  });
});
