class PantryItem < ApplicationRecord
    
    belongs_to :user
    validates :name, :quantity, presence: true
    validates :units, presence: true, allow_blank: true
    
end
