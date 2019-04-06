class Blog
  include Mongoid::Document
  include Mongoid::Timestamps
  field :title, type: String
  field :text, type: String
  field :tags, type: Array
end
