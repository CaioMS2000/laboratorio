from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("https://www.ime.usp.br/~pf/dicios/br-utf8.txt")

el1 = driver.find_element(By.TAG_NAME, "pre")
# el2 = driver.find_element_by_css_selector("pre")

print(el1)
# print(el2)

# driver.quit()

# options = ChromeOptions()
# driver = webdriver.Chrome(options=options)

# driver.quit()
  