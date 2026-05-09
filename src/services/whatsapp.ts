/**
 * MOCK WhatsApp Service for Demo/Portfolio mode
 * No external credentials required.
 */
export const whatsappService = {
  /**
   * Mock sending a message
   */
  async sendMessage(to: string, text: string) {
    console.log(`[MOCK WHATSAPP] Sending to ${to}: ${text}`);
    // Simulate a slight delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { status: "sent", id: `mock_${Date.now()}` };
  },

  /**
   * Mock marking as read
   */
  async markAsRead(messageId: string) {
    console.log(`[MOCK WHATSAPP] Marking as read: ${messageId}`);
  }
};
