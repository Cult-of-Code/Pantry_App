class Instruction < ApplicationRecord
  
    belongs_to :user_recipe
    validates :step, presence: true
  
end
