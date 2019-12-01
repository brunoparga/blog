# frozen_string_literal: true

class Blacklist < ApplicationRecord # rubocop:todo Style/Documentation
  include Devise::JWT::RevocationStrategies::Blacklist

  self.table_name = 'blacklist'
end
