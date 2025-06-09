document.addEventListener("DOMContentLoaded", function () {
    const G_ALERT_API = 'http://localhost:5000/api/galert'; // API endpoint for fetching data
    const container = document.getElementById('galert-container');
    
    async function fetchGAlertData() {
      try {
        const response = await fetch(G_ALERT_API); // Fetch data from the API
        if (!response.ok) throw new Error('Failed to fetch G-Alert data');
        
        const data = await response.json(); // Parse the JSON response
        if (!data.length) {
          container.innerHTML = '<p class="no-data">No G-Alert data available.</p>';
          return;
        }
    
        // Loop through each item and dynamically create product cards
        data.forEach(item => {
          const card = document.createElement('div');
          card.className = 'product-card'; // Add class for styling
    
          // Image Section
          const imageSection = document.createElement('div');
          imageSection.className = 'product-image-section';
          const image = document.createElement('img');
          image.src = item.image_path || 'https://via.placeholder.com/140'; // Fallback if image is missing
          image.alt = item.product_name || 'Product Image'; // Fallback alt text
          imageSection.appendChild(image);
    
          // Content Section
          const contentSection = document.createElement('div');
          contentSection.className = 'product-content';
    
          // Product Name
          const title = document.createElement('h2');
          title.className = 'product-name';
          title.textContent = item.product_name || 'Unnamed Product';
    
          // Product Description
          const description = document.createElement('p');
          description.className = 'product-description';
          description.textContent = item.product_description || 'No description available';
    
          // Tab Navigation (Features, Specs, Uses)
          const tabs = document.createElement('div');
          tabs.className = 'product-tabs';
          const featuresBtn = document.createElement('button');
          featuresBtn.className = 'tab-btn active';
          featuresBtn.textContent = 'Features';
          featuresBtn.setAttribute('data-target', `features${item.galert_id}`);
    
          const specsBtn = document.createElement('button');
          specsBtn.className = 'tab-btn';
          specsBtn.textContent = 'Specifications';
          specsBtn.setAttribute('data-target', `specs${item.galert_id}`);
    
          const usesBtn = document.createElement('button');
          usesBtn.className = 'tab-btn';
          usesBtn.textContent = 'Uses';
          usesBtn.setAttribute('data-target', `uses${item.galert_id}`);
    
          tabs.appendChild(featuresBtn);
          tabs.appendChild(specsBtn);
          tabs.appendChild(usesBtn);
    
          // Tab Content (Features, Specs, Uses)
          const tabContentContainer = document.createElement('div');
          tabContentContainer.className = 'tab-content-container';
    
          // Features Tab
          const featuresTab = document.createElement('div');
          featuresTab.className = 'tab-content active';
          featuresTab.id = `features${item.galert_id}`;
          const featuresList = document.createElement('ul');
          for (let i = 1; i <= 3; i++) {
            const li = document.createElement('li');
            li.textContent = item[`galert_feature${i}`] || `Feature ${i}`;
            featuresList.appendChild(li);
          }
          featuresTab.appendChild(featuresList);
    
          // Specifications Tab
          const specsTab = document.createElement('div');
          specsTab.className = 'tab-content';
          specsTab.id = `specs${item.galert_id}`;
          const specsList = document.createElement('ul');
          for (let i = 1; i <= 3; i++) {
            const li = document.createElement('li');
            li.textContent = item[`galert_spec${i}`] || `Spec ${i}`;
            specsList.appendChild(li);
          }
          specsTab.appendChild(specsList);
    
          // Uses Tab
          const usesTab = document.createElement('div');
          usesTab.className = 'tab-content';
          usesTab.id = `uses${item.galert_id}`;
          const usesList = document.createElement('ul');
          for (let i = 1; i <= 3; i++) {
            const li = document.createElement('li');
            li.textContent = item[`galert_use${i}`] || `Use ${i}`;
            usesList.appendChild(li);
          }
          usesTab.appendChild(usesList);
    
          // Append all sections
          tabContentContainer.appendChild(featuresTab);
          tabContentContainer.appendChild(specsTab);
          tabContentContainer.appendChild(usesTab);
          contentSection.appendChild(title);
          contentSection.appendChild(description);
          contentSection.appendChild(tabs);
          contentSection.appendChild(tabContentContainer);
    
          // Append card to container
          card.appendChild(imageSection);
          card.appendChild(contentSection);
          container.appendChild(card);
    
          // Add event listeners for tab buttons
          const tabBtns = card.querySelectorAll(".tab-btn");
          tabBtns.forEach(btn => {
            btn.addEventListener("click", function () {
              const targetId = this.getAttribute("data-target");
              const parentCard = this.closest(".product-card");
    
              // Remove active class from all tab buttons and content
              parentCard.querySelectorAll(".tab-btn").forEach(button => button.classList.remove("active"));
              parentCard.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
                content.style.opacity = "0";
              });
    
              // Add active class to clicked tab and corresponding content
              this.classList.add("active");
              const activeContent = parentCard.querySelector(`#${targetId}`);
              activeContent.classList.add("active");
              activeContent.style.opacity = "1";
            });
          });
        });
    
      } catch (error) {
        console.error(error);
        container.innerHTML = '<p class="error-message">Failed to load G-Alert data. Try again later.</p>';
      }
    }
    
    // Fetch the data when the page loads
    fetchGAlertData();
  });
  