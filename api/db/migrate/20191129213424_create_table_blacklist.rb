# rubocop:todo Style/Documentation
# frozen_string_literal: true

class CreateTableBlacklist < ActiveRecord::Migration[6.0]
  def change
    # rubocop:todo Rails/CreateTableWithTimestamps
    create_table :blacklist do |t|
      t.string :jti, null: false
      t.datetime :exp, null: false
    end
    # rubocop:enable Rails/CreateTableWithTimestamps
    add_index :blacklist, :jti
  end
end
# rubocop:enable Style/Documentation
